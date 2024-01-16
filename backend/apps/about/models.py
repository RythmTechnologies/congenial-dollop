from django.db import models

# Create your models here.

class Biography(models.Model):
    date = models.DateField(verbose_name="Biografi Tarih", auto_now=False, auto_now_add=False)
    content = models.TextField(verbose_name="Biografi içerik")

    def __str__(self) -> str:
        return self.content[:20] 

    class Meta:
        verbose_name = "Biografi"
        verbose_name_plural = "Biyografiler"
    