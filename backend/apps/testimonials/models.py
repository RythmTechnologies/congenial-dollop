from django.db import models
from apps.main.mixin import TimeBasedStampModel


# Testimonials ORM Start

class Testimonials(TimeBasedStampModel):
  name = models.CharField(("Referans Adı"), max_length=50)
  image = models.ImageField(("Referans Resmi"), upload_to="testimonials")

  def __str__(self) -> str:
    return self.name

# Testimonials ORM End