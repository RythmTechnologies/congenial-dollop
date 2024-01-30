from rest_framework import serializers

from .models import *




class LinksSerializers(serializers.ModelSerializer):

    class Meta:
        model = Links
        fields = "__all__"
        depth = 1