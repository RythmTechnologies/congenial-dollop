from django.urls import path
from .views import *

urlpatterns = [
    path('blogs', Get_all_blog.as_view(), name="blogs"),
]
