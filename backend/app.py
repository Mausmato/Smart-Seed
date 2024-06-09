from flask import Flask
from predictions import output, load_image
app = Flask(__name__)

@app.route('/')
def hello_world():
    file_path = sys.argv[1]
    img = load_image(file_path)
    predicted_class, class_probabilities = output(full_pipeline, img)
    print(f"Predicted class: {predicted_class}")
    print("Class probabilities:")
    for class_name, probability in class_probabilities.items():
        print(f"{class_name}: {probability:.4f}")

    return 'Hello, World!'