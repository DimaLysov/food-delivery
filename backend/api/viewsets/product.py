from drf_spectacular.utils import extend_schema
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import ReadOnlyModelViewSet

from api.models import Product
from api.serializers.product import ProductSerializer


@extend_schema(tags=['Product'])
class ProductViewSet(ReadOnlyModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

    @action(detail=False, methods=['get'], url_path='by-category/(?P<category_id>[^/.]+)')
    def get_product_by_category(self, request, category_id=None):
        products = self.queryset.filter(category=category_id)
        serializer = self.serializer_class(products, many=True, context={'request': request})
        return Response(serializer.data)