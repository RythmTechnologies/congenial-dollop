from rest_framework import serializers

from .models import *




class BlogsSerializer(serializers.ModelSerializer):


    class Meta:
        model = Blog
        fields = "__all__"

    def to_representation(self, instance):
        representation = super(BlogsSerializer, self).to_representation(instance)

        category_representation = {
            'id': instance.category.id,
            'name': instance.category.name,
            'slug': instance.category.slug,
        }

        label_representation = [
            {
                'id': label.id,
                'name': label.name,
            } for label in instance.label.all()
        ]

        representation['category'] = category_representation
        representation['label'] = label_representation

        return representation