from django.db import models
from autoslug import AutoSlugField
from apps.main.mixin import TimeBasedStampModel
from apps.main.mixin import MyS3Storage

# Teams Orm Start
class Teams(TimeBasedStampModel):
    name = models.CharField(("Takım Üyesi Adı"), max_length=50)
    title = models.CharField(("Takım Üyesi Ünvanı"), max_length=200)
    photo = models.ImageField(("Takım Üyesi Fotoğrafı"), storage=MyS3Storage() ,upload_to="team")
    slug = AutoSlugField(populate_from="name", editable=False, always_update=True, blank=True)

    def __str__(self) -> str:
      return self.name

    class Meta:
        verbose_name = 'Takım Üyesi'
        verbose_name_plural = 'Takım Üyeleri'
# Teams Orm End
