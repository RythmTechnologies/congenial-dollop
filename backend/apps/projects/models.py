from django.db import models
from autoslug import AutoSlugField

# TimeBasedStamp Model Start
class TimeBasedStampModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
# TimeBasedStamp Model End

#Project Orm Start
class Project(TimeBasedStampModel):
    name = models.CharField(("Proje Adı"), max_length=50)
    description = models.TextField(("Proje Açıklaması"))
    image = models.ImageField(("Proje Resmi"), upload_to="projects", height_field=None, width_field=None, max_length=None)
    source = models.URLField(("Proje Url"), max_length=200, blank = True)
    slug = AutoSlugField(populate_from="name", editable=False, always_update=True, blank=True)

    def __str__(self) -> str:
        return self.name
#Project Orm End

