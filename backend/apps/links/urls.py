from django.urls import path
from .views import Get_all_links

urlpatterns = [
    path("links", Get_all_links.as_view(), name="links"),
]
