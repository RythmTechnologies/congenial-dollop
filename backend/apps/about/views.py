from django.shortcuts import render
# Create your views here.
from rest_framework import generics
from .serializers import BiographySerializers
from .models import Biography


class BiographyListView(generics.ListAPIView):
    queryset = Biography.objects.all()  
    serializer_class = BiographySerializers