from django.urls import path
from .views import *

urlpatterns = [
    path('socials', Get_all_socials.as_view(), name="socials"),
]
