from django.db import models
from tinymce.models import HTMLField
from apps.main.mixin import TimeBasedStampModel
from apps.main.mixin import MyS3Storage

## image biyografi iletişim Logo Footer

# MainBackground ORM Start
class MainBackground(TimeBasedStampModel):
    image = models.ImageField(upload_to='images/',verbose_name="Anasayfa Arkaplan",storage=MyS3Storage(),blank=True)
    video = models.FileField(upload_to='videos/',storage=MyS3Storage(),blank=True)

    title = models.CharField(max_length=50,verbose_name="Anasayfa Başlık")
    subtitle = HTMLField(verbose_name="Anasayfa Altbaşlık")

    def __str__(self) -> str:
        return self.title

    class Meta:
        verbose_name = 'Anasayfa Arkaplan'
        verbose_name_plural = 'Anasayfa Arkaplan'
# MainBackground ORM End

