from django.http import HttpRequest, HttpResponse, HttpResponseRedirect
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
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

#Blog All Start
class Get_blog_all(APIView):
    def get(self, request, format=None) -> Response:
        queryset = Blog.objects.all()
        serializer = BlogsSerializer(queryset, many=True)
        if request.method == "GET":
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"error":"Invalid Method"}, status=status.HTTP_400_BAD_REQUEST)
    
#Blog All End