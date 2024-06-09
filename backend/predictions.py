import os
import numpy as np
import pandas as pd
from tensorflow import keras
import tensorflow as tf
from sklearn.base import BaseEstimator, TransformerMixin
from sklearn.pipeline import Pipeline
from PIL import Image
import sys

def load_image(image_file):
    img = Image.open(image_file)
    return img

class Preprocessor(BaseEstimator, TransformerMixin):
    def fit(self, X, y=None):
        return self

    def transform(self, img_object, y=None):
        img = img_object.resize((224, 224))
        img_array = np.array(img) / 255.0  # Normalize to [0, 1]
        expanded = np.expand_dims(img_array, axis=0)
        return expanded

class Predictor(BaseEstimator, TransformerMixin):
    def __init__(self, model):
        self.model = model

    def fit(self, X, y=None):
        return self

    def predict(self, img_array):
        pred = self.model.predict(img_array)
        return pred

if __name__ == '__main__':
    file_path = sys.argv[1]

    model = keras.models.load_model('weights.hdf5')
    mapping = ['P_Deficiency', 'N_Deficiency', 'K_Deficiency', 'Healthy']

    full_pipeline = Pipeline([
        ('preprocessor', Preprocessor()),
        ('predictor', Predictor(model))
    ])

    img = load_image(file_path)
    pred = full_pipeline.predict(img)

    phosphorus_percentage = str(pred[0][0] * 100) + "%"
    Nitrogen_percentage = str(pred[0][1] * 100) + "%"
    potassium_percentage = str(pred[0][2] * 100) + "%"
    plant_health = str(pred[0][3] * 100) + "%"

    print(f"phosphorus = {phosphorus_percentage} nitrogen = {Nitrogen_percentage} potassium = {potassium_percentage} health = {plant_health}")
