from django.urls import path
from .views import *

urlpatterns = [
    path('intro', intro, name="blog-index"),
    path('blogs', get_blog_all, name="blogs"),
]
