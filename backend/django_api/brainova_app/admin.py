from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, Diagnosis, EEGRecord, PatientProfile

# Register your models here.
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'first_name', 'last_name')
    
admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Diagnosis)
admin.site.register(EEGRecord)
admin.site.register(PatientProfile)
