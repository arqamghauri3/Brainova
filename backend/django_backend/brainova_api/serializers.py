from rest_framework import serializers
from .models import *


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["first_name", "last_name", "email"]
class PatientSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=CustomUser.objects.all())

    class Meta:
        model = Patient
        fields = ["user", "age", "gender"]

class ProfileSerializer(serializers.Serializer):
    user = CustomUserSerializer(many=True)
    patient = PatientSerializer(many=True)