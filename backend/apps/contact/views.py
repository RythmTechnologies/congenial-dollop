from django.shortcuts import render
# Create your views here.
from rest_framework import generics
from .serializer import ContactSerializers
from .models import Contact


class ContactListView(generics.ListAPIView):
    queryset = Contact.objects.all()  
    serializer_class = ContactSerializers