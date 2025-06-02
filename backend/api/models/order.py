from django.db import models

from api.models.product import Product


class Order(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    amount = models.IntegerField(verbose_name='Количество шт')

    def __str__(self):
        return f'{self.product} - {self.amount} шт (кг)'

    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'