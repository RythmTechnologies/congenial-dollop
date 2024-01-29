from rest_framework import serializers
from .models import *


# Testimonials Serializers Start
class TeamsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Testimonials
        fields = "__all__"
# Testimonials Serializers End