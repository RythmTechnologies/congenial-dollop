from django.db import models
from apps.main.mixin import TimeBasedStampModel


class Links(TimeBasedStampModel):
  name = models.CharField(("Link"), max_length=50)
  
  def __str__(self) -> str:
    return self.name
  
  class Meta:
        verbose_name = 'Link'
        verbose_name_plural = 'Linkler'
