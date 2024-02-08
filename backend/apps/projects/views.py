from django.http import HttpRequest, HttpResponse, HttpResponseRedirect
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *
from .serializers import *


# Type Hint
import typing as t
RedirectOrResponse = t.Union[HttpResponseRedirect, HttpResponse]


#Projects All Start

class Get_all_projects(APIView):
    def get(self, request: HttpRequest) -> Response:
        queryset = Project.objects.all()
        serializers = ProjectsSerializers(queryset, many=True)
        return Response(serializers.data, status=status.HTTP_200_OK)
    

class get_project_by_slug(APIView):
    def get(self, request: HttpRequest, slug) -> Response:
        try:
            project = Project.objects.get(slug=slug)
        except Project.DoesNotExist:
            return Response({'error': 'Project not found'}, status=status.HTTP_404_NOT_FOUND)

        serializer = ProjectsSerializers(project)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
#Projects All End