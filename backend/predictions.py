import os
import sys
import numpy as np
import pandas as pd
from tensorflow import keras
import tensorflow as tf
from sklearn.base import BaseEstimator, TransformerMixin
from sklearn.pipeline import Pipeline
from PIL import Image

os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

# Ensure compatibility with the latest TensorFlow and Keras versions
from tensorflow.keras.preprocessing import image as keras_image

def load_image(image_file):
    img = Image.open(image_file)
    return img

class Preprocessor(BaseEstimator, TransformerMixin):
    def fit(self, X, y=None):
        return self
    
    def transform(self, X):
        processed_images = []
        for img_object in X:
            img = img_object.resize((224, 224))
            img_array = keras_image.img_to_array(img)
            img_array = np.expand_dims(img_array, axis=0)
            img_array = tf.keras.applications.mobilenet_v2.preprocess_input(img_array)
            processed_images.append(img_array)
        return np.vstack(processed_images)

class Predictor(BaseEstimator, TransformerMixin):
    def __init__(self, model_path):
        # Load the model without compilation
        self.model = keras.models.load_model(model_path, compile=False)
        self.mapping = ['P_Deficiency', 'K_Deficiency', 'N_Deficiency', 'Healthy']
        # Compile the model explicitly
        self.model.compile(
            optimizer='adam', 
            loss='sparse_categorical_crossentropy', 
            metrics=['accuracy']
        )
    
    def fit(self, X, y=None):
        return self
    
    def predict(self, img_array):
        probabilities = self.model.predict(img_array)
        predicted_class = self.mapping[np.argmax(probabilities, axis=1)[0]]
        class_probabilities = {self.mapping[i]: prob for i, prob in enumerate(probabilities[0])}
        return predicted_class, class_probabilities

model_path = 'weights.hdf5'
full_pipeline = Pipeline([
    ('preprocessor', Preprocessor()),
    ('predictor', Predictor(model_path=model_path))
])

def output(full_pipeline, img):
    predicted_class, class_probabilities = full_pipeline.predict([img])
    return predicted_class, class_probabilities

if __name__ == '__main__':
    file_path = sys.argv[1]
    img = load_image(file_path)
    predicted_class, class_probabilities = output(full_pipeline, img)
    print(f"Predicted class: {predicted_class}")
    print("Class probabilities:")
    for class_name, probability in class_probabilities.items():
        print(f"{class_name}: {probability:.4f}")
