from django.shortcuts import render, redirect
from .serializers import *
from .models import *
from rest_framework.generics import *
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from dj_rest_auth.registration.views import SocialLoginView
import jwt
from time import time  # Ensure 'time' is also imported
from allauth.socialaccount.providers.oauth2.client import OAuth2Error
from time import sleep
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

class GoogleOAuth2IatValidationAdapter(GoogleOAuth2Adapter):
    def complete_login(self, request, app, token, response, **kwargs):
        try:
            delta_time = (
                jwt.decode(
                    response.get("id_token"),
                    options={"verify_signature": False},
                    algorithms=["RS256"],
                )["iat"]
                - time()
            )
        except jwt.PyJWTError as e:
            raise OAuth2Error("Invalid id_token during 'iat' validation") from e
        except KeyError as e:
            raise OAuth2Error("Failed to get 'iat' from id_token") from e

		# Or change 30 to whatever you feel is a maximum amount of time you are willing to wait
        if delta_time > 0 and delta_time <= 30:
            sleep(delta_time)

        return super().complete_login(request, app, token, response, **kwargs)

class GoogleLogin(SocialLoginView): # if you want to use Authorization Code Grant, use this
    adapter_class = GoogleOAuth2IatValidationAdapter
    callback_url = "http://localhost:5173/"
    client_class = OAuth2Client

# Create your views here.
def email_confirmation(request, key):
    return redirect(f"http://localhost:5173/dj-rest-auth/registration/account-confirm-email/{key}")

def reset_password_confirm(request, uid, token):
    return redirect(f"http://localhost:5173/reset/password/confirm/{uid}/{token}")

class PatientCreateAPIView(CreateAPIView):
    permission_classes = [IsAuthenticated]
    model = Patient
    serializer_class = PatientSerializer
    
    
class PatientListAPIView(ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    
class ProfileRetrieveAPIView(RetrieveAPIView):
    serializer_class = ProfileSerializer

    def retrieve(self, request, *args, **kwargs):
        user_id = self.kwargs.get('user_id')
        user = get_object_or_404(CustomUser, id=user_id)

        patient = get_object_or_404(Patient, user=user)  

        data = {
            'user': CustomUserSerializer(user).data,
            'patient': PatientSerializer(patient).data
        }
        
        return Response(data)