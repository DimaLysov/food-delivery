from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255, verbose_name="Название категории")
    image_url = models.ImageField(upload_to='images', default='images/img.png')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'