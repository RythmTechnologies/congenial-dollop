from django.urls import path
from .views import Get_all_subs_links

urlpatterns = [
    path("subs-links", Get_all_subs_links.as_view(), name="subs-links"),
]
