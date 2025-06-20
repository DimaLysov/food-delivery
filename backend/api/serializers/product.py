from rest_framework import serializers

from api.models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class ProductCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ['id', 'name', 'cost', 'composition', 'image_url']