from django.urls import path, include
from rest_framework import routers

from api.viewsets.category import CategoryViewSet
from api.viewsets.product import ProductViewSet
from api.viewsets.order import OrderViewSet


router = routers.DefaultRouter()
router.register(r'category', CategoryViewSet)
router.register(r'product', ProductViewSet)
router.register(r'order', OrderViewSet)


urlpatterns = [
    path('', include(router.urls)),
]