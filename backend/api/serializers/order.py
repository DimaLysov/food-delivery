from rest_framework import serializers

from api.models import Order


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'

class OrderListSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='product.name')
    cost = serializers.IntegerField(source='product.cost')
    composition = serializers.CharField(source='product.composition')
    image_url = serializers.ImageField(source='product.image_url')
    class Meta:
        model = Order
        fields = ['id', 'name', 'cost', 'composition', 'image_url', 'amount']

class OrderUpdateAmountSerializer(serializers.ModelSerializer):
    amount = serializers.IntegerField()
    class Meta:
        model = Order
        fields = ['amount']

    def update(self, instance, validated_data):
        instance.amount = validated_data['amount']
        instance.save()
        return instance