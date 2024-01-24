from django.http import HttpRequest
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *
from .serializers import *

"""
For Example Mixing
# from apps.mixing.views import RedirectOrResponse

"""

# Socials View Start
class Get_all_socials(APIView):
  def get(self, request: HttpRequest) -> Response:
    queryset = SocialMedia.objects.all()
    serializers = SocialMediaSerializers(queryset, many=True)
    return Response(serializers.data, status=status.HTTP_200_OK)
# Socials View End