from django.urls import path
from .views import ApartmentListAPI

urlpatterns = [
    path('apartments/', ApartmentListAPI.as_view()),
]