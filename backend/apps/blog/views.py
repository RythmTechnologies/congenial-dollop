from django.shortcuts import render

from django.http import HttpRequest, HttpResponse, HttpResponseRedirect
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import DjangoModelPermissionsOrAnonReadOnly

from django.contrib.auth.decorators import login_required
from .models import *
from .serializer import *


# Type Hint
import typing as t
RedirectOrResponse = t.Union[HttpResponseRedirect, HttpResponse]

descriptions = [
    {
        "Welcome": "Blog Api v1",
        "Api Version 1.0": "/docs or /redoc",
    }
]

@api_view(["GET"])
def intro(request: HttpRequest) -> Response:
    return Response(descriptions, status=status.HTTP_200_OK)

@api_view(["GET"])
def get_blog_all(request: HttpRequest) -> Response:
    blogs = Blog.objects.all()

    if blogs:
        serializer = BlogsSerializer(blogs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        return Response({"error": "Blogs Not Found"}, status=status.HTTP_404_NOT_FOUND)