from django.contrib.auth.models import AbstractUser
from django.db import models
import uuid

class CustomUser(AbstractUser):
    """
    Custom user model extending Django's AbstractUser.
    """
    email = models.EmailField(unique=True)
    is_patient = models.BooleanField(default=True)  # Default user type is patient

    def __str__(self):
        return self.username

class EEGRecord(models.Model):
    """
    Model to store EEG data uploaded by patients or doctors.
    """
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="eeg_records")
    file = models.FileField(upload_to="brainova_uploads/")
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"EEG Record {self.id} by {self.user.username}"

class Diagnosis(models.Model):
    """
    Stores AI model predictions for EEG records.
    """
    eeg_record = models.OneToOneField(EEGRecord, on_delete=models.CASCADE, related_name="diagnosis")
    prediction = models.CharField(max_length=50, choices=[("Healthy", "Healthy"), ("Parkinson's Detected", "Parkinson's Detected")])
    confidence = models.FloatField()  # Confidence score of AI model (0-1)
    diagnosed_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Diagnosis for {self.eeg_record.user.username}: {self.prediction} ({self.confidence * 100:.2f}%)"

class PatientProfile(models.Model):
    """
    Stores additional details for patients.
    """
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name="profile")
    age = models.PositiveIntegerField(null=True, blank=True)
    gender = models.CharField(max_length=10, choices=[("Male", "Male"), ("Female", "Female"), ("Other", "Other")], blank=True)

    def __str__(self):
        return f"Profile of {self.user.username}"
