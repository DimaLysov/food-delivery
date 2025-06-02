from drf_spectacular.utils import extend_schema
from rest_framework import status, mixins
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet, GenericViewSet

from api.models import Order
from api.serializers.order import OrderSerializer, OrderUpdateAmountSerializer, OrderListSerializer


@extend_schema(tags=['Order'])
class OrderViewSet(mixins.CreateModelMixin,
                   mixins.DestroyModelMixin,
                   GenericViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()

    def get_serializer_class(self):
        if self.action == 'list':
            return OrderListSerializer
        elif self.action == 'update_quantity':
            return OrderUpdateAmountSerializer
        return OrderSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        sorted_data = sorted(serializer.data, key=lambda x: x['id'])
        return Response(sorted_data)

    def create(self, request, *args, **kwargs):
        product_id = request.data.get('product')
        amount = request.data.get('amount')
        existing_order = Order.objects.filter(product_id=product_id).first()
        if existing_order:
            existing_order.amount += int(amount)
            existing_order.save()
            serializer = self.get_serializer(existing_order)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return super().create(request, *args, **kwargs)

    @action(detail=True, methods=['patch'], url_path='update-amount')
    def update_quantity(self, request, pk=None):
        order = self.get_object()
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.update(order, serializer.validated_data)
        return Response(self.get_serializer(order).data)
