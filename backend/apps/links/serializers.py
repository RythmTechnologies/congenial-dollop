from rest_framework import serializers

from .models import *




class LinksSerializers(serializers.ModelSerializer):

    class Meta:
        model = Links
        fields = "__all__"

    def to_representation(self, instance):
        representation = super(LinksSerializers, self).to_representation(instance)

        sublinks_representation = [
            {
                'id': sub_links.id,
                'title': sub_links.title,
                'descriptions': sub_links.descriptions,
                'href': sub_links.href
            } for sub_links in instance.sub_links.all()
        ]

        representation['sub_links'] = sublinks_representation

        return representation