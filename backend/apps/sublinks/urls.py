from django.urls import path
from .views import Get_all_sub_links

urlpatterns = [
    path("sub-links", Get_all_sub_links.as_view(), name="sub-links"),
]
