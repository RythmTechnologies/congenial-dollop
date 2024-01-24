from rest_framework import serializers
from .models import *


class BiographySerializers(serializers.ModelSerializer):
    class Meta:
        model = Biography
        fields = "__all__"