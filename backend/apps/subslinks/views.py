from django.http import HttpRequest
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *
from .serializers import *



#Subs Links All Start
class Get_all_subs_links(APIView):
    def get(self, request: HttpRequest) -> Response:
        queryset = SubsLink.objects.all()
        serializers = SubsLinksSerializers(queryset, many=True)
        return Response(serializers.data, status=status.HTTP_200_OK)
#Subs Links All End
