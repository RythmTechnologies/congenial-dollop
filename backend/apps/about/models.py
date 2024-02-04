from django.db import models
from tinymce.models import HTMLField
from apps.main.mixin import TimeBasedStampModel

# Biography ORM Start
class Biography(TimeBasedStampModel):
    name = models.CharField(verbose_name="Biografi Adı", max_length=50)
    date = models.DateField(verbose_name="Biografi Tarih", auto_now=False, auto_now_add=False)
    content = HTMLField(verbose_name="Biografi içerik")

    def __str__(self) -> str:
        return self.content[:20] 

    class Meta:
        verbose_name = "Biografi"
        verbose_name_plural = "Biyografiler"
        ordering = ('id', )

        
# Biography ORM End