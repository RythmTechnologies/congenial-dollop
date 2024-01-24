from django.urls import path
from .views import *

urlpatterns = [
    path('projects', Get_projects_all.as_view(), name="projects"),
]
