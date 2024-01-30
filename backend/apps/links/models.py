from django.db import models
from apps.main.mixin import TimeBasedStampModel
from apps.sublinks.models import SubLinks


# Links ORM Start
class Links(TimeBasedStampModel):
  name = models.CharField(("Link"), max_length=50)
  href = models.CharField(("Link Yolu"), max_length=50, blank = True)
  sub_links = models.ManyToManyField(SubLinks, verbose_name=("Sub Link"), blank=True)
  has_subs_links = models.BooleanField(("Subs Linki Var mı?"), default = False)
  
  def __str__(self) -> str:
    return self.name
  
  class Meta:
        verbose_name = 'Link'
        verbose_name_plural = 'Linkler'
# Links ORM End
