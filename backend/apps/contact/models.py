from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
# Create your models here.

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = PhoneNumberField(blank=True,region='TR')
    
    def __str__(self) -> str:
        return self.name
    
    class Meta:
        verbose_name = 'İletişim'
        verbose_name_plural = 'İletişim bilgileri'
