from django.shortcuts import render
# Create your views here.
from rest_framework import generics
from .serializer import ContactSerializers
from .models import Contact


class ContactListView(generics.ListCreateAPIView):
    queryset = Contact.objects.all()  
    serializer_class = ContactSerializers