from django.db import models
from apps.main.mixin import TimeBasedStampModel
from apps.subslinks.models import SubsLink


# Links ORM Start
class Links(TimeBasedStampModel):
  name = models.CharField(("Link"), max_length=50)
  subslink = models.ManyToManyField(SubsLink, verbose_name=("Subs Link"))
  
  def __str__(self) -> str:
    return self.name
  
  class Meta:
        verbose_name = 'Link'
        verbose_name_plural = 'Linkler'
# Links ORM End
