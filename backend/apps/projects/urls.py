from django.urls import path
from .views import *

urlpatterns = [
    path('projects', Get_all_projects.as_view(), name="projects"),
    path('projects/<slug:slug>', get_project_by_slug.as_view(), name="project-detail"),
]
