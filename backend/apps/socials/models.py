from django.db import models
from autoslug import AutoSlugField
from apps.main.mixin import TimeBasedStampModel

"""
For Model; 
Can be get the TimeBasedStampModel
"""


# Social Media Orm Start
class SocialMedia(TimeBasedStampModel):
    name = models.CharField(("Sosyal Medya Adı:"), max_length=50)
    url = models.URLField(("Url Adresi"), max_length=200)
    slug = AutoSlugField(populate_from="name", editable=False, always_update=True, blank=True)
  
    def __str__(self) -> str:
      return self.name + " ("+self.url+")"
    
    class Meta:
        verbose_name = 'Sosyal Medya'
        verbose_name_plural = 'Sosyal Medyalar'
# Social Media Orm End