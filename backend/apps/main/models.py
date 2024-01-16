from django.db import models

# Create your models here.
## image biyografi iletişim Logo Footer 
class MainBackground(models.Model):
    image = models.ImageField(upload_to='images/',verbose_name="Anasayfa Arkaplan",blank=True)
    video = models.FileField(upload_to='videos/',blank=True)

    title = models.CharField(max_length=50,verbose_name="Anasayfa Başlık")
    subtitle = models.TextField(verbose_name="Anasayfa Altbaşlık")

    def __str__(self) -> str:
        return self.title
    
    class Meta:
        verbose_name = 'Anasayfa Arkaplan'
        verbose_name_plural = 'Anasayfa Arkaplan'


