from rest_framework import serializers
from .models import *

class PatientSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=CustomUser.objects.all())

    class Meta:
        model = Patient
        fields = ["user", "age", "gender"]
        