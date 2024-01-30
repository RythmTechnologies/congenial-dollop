from rest_framework import serializers

from .models import *

class SubLinksSerializers(serializers.ModelSerializer):

    class Meta:
        model = SubLinks
        fields = "__all__"