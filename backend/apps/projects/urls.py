from django.urls import path
from .views import *

urlpatterns = [
    path('projects', Get_all_projects.as_view(), name="projects"),
]
