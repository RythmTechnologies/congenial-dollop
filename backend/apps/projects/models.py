from autoslug import AutoSlugField
from django.db import models
from tinymce.models import HTMLField
from autoslug import AutoSlugField
from django.utils.text import slugify as django_slugify
from apps.main.mixin import TimeBasedStampModel
from apps.main.mixin import MyS3Storage
import uuid

# Türkçe karakterlerin Latin harflerine dönüştürülmesi için dışarıda bir fonksiyon tanımlayın
def custom_slugify(value):
    replacements = (
        ('ç', 'c'),
        ('ğ', 'g'),
        ('ı', 'i'),
        ('ö', 'o'),
        ('ş', 's'),
        ('ü', 'u'),
        ('İ', 'I'),
    )
    for search, replace in replacements:
        value = value.replace(search, replace)
    # Django'nun slugify fonksiyonunu kullanarak slug oluşturun
    return django_slugify(value)

# Project Orm Start
class Project(TimeBasedStampModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid1, editable=False)
    name = models.CharField(("Proje Adı"), max_length=50)
    description = HTMLField(("Proje Açıklaması"))
    image = models.ImageField(("Proje Resmi"), storage=MyS3Storage() ,upload_to="projects")
    source = models.URLField(("Proje Url"), max_length=200, blank=True)
    slug = AutoSlugField(populate_from="name", unique=True, editable=False, always_update=True, blank=True, slugify=custom_slugify)


    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = "Proje"
        verbose_name_plural = "Projeler"


# Project Orm End
