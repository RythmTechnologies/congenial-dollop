from django.urls import path
from .views import *

urlpatterns = [
    path('testimonials', Get_all_testimonials.as_view(), name="testimonials"),
]
