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
class Get_projects_all(APIView):
    def get(self, request: HttpRequest) -> Response:
        queryset = Project.objects.all()
        serializers = ProjectsSerializers(queryset, many=True)
        return Response(serializers.data, status=status.HTTP_200_OK)
#Projects All End