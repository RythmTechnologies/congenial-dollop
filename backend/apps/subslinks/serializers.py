from rest_framework import serializers

from .models import *

class SubsLinksSerializers(serializers.ModelSerializer):

    class Meta:
        model = SubsLink
        fields = "__all__"