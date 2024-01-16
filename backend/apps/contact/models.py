from django.db import models

# Create your models here.

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)

    def __str__(self) -> str:
        return self.name
    
    class Meta:
        verbose_name = 'İletişim'
        verbose_name_plural = 'İletişim bilgileri'
