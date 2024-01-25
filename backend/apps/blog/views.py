from django.http import HttpRequest, HttpResponse, HttpResponseRedirect
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *
from .serializers import *



#Blog All Start
class Get_all_blog(APIView):
    def get(self, request: HttpRequest) -> Response:
        queryset = Blog.objects.all()
        serializers = BlogsSerializer(queryset, many=True)
        return Response(serializers.data, status=status.HTTP_200_OK)
#Blog All End