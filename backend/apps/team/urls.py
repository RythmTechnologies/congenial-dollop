from django.urls import path
from .views import *

urlpatterns = [
    path('teams', Get_all_teams.as_view(), name="teams"),
]
