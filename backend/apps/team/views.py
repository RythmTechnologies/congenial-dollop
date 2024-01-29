from django.http import HttpRequest
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *
from .serializers import *


# Teams View Start
class Get_all_teams(APIView):
  def get(self, request: HttpRequest) -> Response:
    queryset = Teams.objects.all()
    serializers = TeamsSerializers(queryset, many=True)
    return Response(serializers.data, status=status.HTTP_200_OK)
# Teams View End