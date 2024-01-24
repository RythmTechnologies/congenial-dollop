from django.urls import path
from .views import *

urlpatterns = [
    path('intro', intro, name="blog-index"),
    path('blogs', Get_blog_all.as_view(), name="blogs"),
]
