from rest_framework import serializers
from .models import *


# Teams Serializers Start
class TeamsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Teams
        fields = "__all__"
# Teams Serializers End