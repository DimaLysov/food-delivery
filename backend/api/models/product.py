from django.db import models

from api.models import Category


class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, verbose_name="Название товара")
    cost = models.IntegerField(verbose_name='стоимость продукта за шт (кг)')
    composition = models.TextField(verbose_name='Состав продукта')
    image_url = models.ImageField(upload_to='images', default='images/img.png')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'