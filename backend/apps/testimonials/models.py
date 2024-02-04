from django.db import models
from apps.main.mixin import TimeBasedStampModel
from apps.main.mixin import MyS3Storage


# Testimonials ORM Start

class Testimonials(TimeBasedStampModel):
  name = models.CharField(("Referans Adı"), max_length=50)
  image = models.ImageField(("Referans Resmi"), storage=MyS3Storage(),upload_to="testimonials")

  class Meta:
    verbose_name = 'Referans'
    verbose_name_plural = 'Referanslar'

  def __str__(self) -> str:
    return self.name

# Testimonials ORM End