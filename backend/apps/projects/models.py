from autoslug import AutoSlugField
from django.db import models
from tinymce.models import HTMLField

from apps.main.mixin import TimeBasedStampModel


# Project Orm Start
class Project(TimeBasedStampModel):
    name = models.CharField(("Proje Adı"), max_length=50)
    description = HTMLField(("Proje Açıklaması"))
    image = models.ImageField(("Proje Resmi"), upload_to="projects")
    source = models.URLField(("Proje Url"), max_length=200, blank=True)
    slug = AutoSlugField(
        populate_from="name", editable=False, always_update=True, blank=True
    )

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = "Proje"
        verbose_name_plural = "Projeler"


# Project Orm End
