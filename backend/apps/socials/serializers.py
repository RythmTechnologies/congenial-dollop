from rest_framework import serializers
from .models import *


class SocialMediaSerializers(serializers.ModelSerializer):
    class Meta:
        model = SocialMedia
        fields = "__all__"