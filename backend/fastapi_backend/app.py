from fastapi import FastAPI, UploadFile, File
import torch
import numpy as np
from utils import EEGClassifier
app = FastAPI()
model_path = './model/cnngru.pt'  # Replace with your model path
classifier = EEGClassifier(model_path)
# Load trained AI model

@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    try:
        # Example: Load data from CSV
        raw_data = np.loadtxt(file.file, delimiter=',')
        if raw_data.shape[1] != 59:  # if number of columns is not 59
           raw_data = raw_data.T
        # Make prediction
        predicted_class, probabilities = classifier.predict(raw_data)

        # Print results
        print(f"Predicted Class: {predicted_class}")
        print(f"Class Probabilities:")
        print(f"Class 0 (Control): {probabilities['class_0']:.4f}")
        print(f"Class 1 (Patient): {probabilities['class_1']:.4f}")

    except Exception as e:
        print(f"Error during classification: {str(e)}")


    return {"prediction": "Parkinson's Detected" if predicted_class == 1 else "Healthy"}