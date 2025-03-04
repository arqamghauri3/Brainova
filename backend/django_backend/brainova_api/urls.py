from django.urls import path
from .views import *

urlpatterns = [
    # path('register/', RegisterUserView.as_view(), name="register"),
    # path('verify-email/', VerifyUserEmail.as_view(), name="verify-email"),
    # path('login/', LoginUserView.as_view(), name="login"),
    # path('test/', TestAuthenticateView.as_view(), name="test"),
    path('patients/create/', PatientCreateAPIView.as_view(), name="patient-create"),
    path('patients/', PatientListAPIView.as_view(), name="patient-list"),
    path('profile/<int:user_id>/', ProfileRetrieveAPIView.as_view(), name="profile-list"),
    
    
]