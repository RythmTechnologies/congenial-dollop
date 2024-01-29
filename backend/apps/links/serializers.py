from rest_framework import serializers

from .models import *




class LinksSerializers(serializers.ModelSerializer):

    class Meta:
        model = Links
        fields = "__all__"

    def to_representation(self, instance):
        representation = super(LinksSerializers, self).to_representation(instance)

        subslink_representation = [
            {
                'id': subslink.id,
                'title': subslink.title,
                'descriptions': subslink.descriptions,
                'href': subslink.href
            } for subslink in instance.subslink.all()
        ]

        representation['subslink'] = subslink_representation

        return representation