from django.urls import path
from .views import BiographyListView

urlpatterns = [
    path("biography", BiographyListView.as_view(), name="biography-list"),
    
]
