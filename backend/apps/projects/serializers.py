from rest_framework import serializers

from .models import *




class ProjectsSerializers(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = "__all__"