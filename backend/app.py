from flask import Flask, request, jsonify
import base64
from io import BytesIO
from PIL import Image
from predictions import output, load_image, full_pipeline

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/predict', methods=['POST'])
def predict():
    img=""
    if 'file' in request.files:
        # Handle file upload
        file = request.files['file']
        img = Image.open(file)
    elif 'image' in request.json:
        # Handle base64 string
        img_data = request.json['image']
        img_bytes = base64.b64decode(img_data)
        img = Image.open(BytesIO(img_bytes))
        img.save('temp.jpg')
    else:
        return jsonify({'error': 'No image provided'}), 400
    
    predicted_class, class_probabilities = output(full_pipeline, img)
    
    return jsonify({
        'predicted_class': predicted_class,
        'class_probabilities': class_probabilities
    })

if __name__ == '__main__':
    app.run(debug=True)

    