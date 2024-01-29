from django.db import models
from apps.main.mixin import TimeBasedStampModel


# Subs Link ORM Start
class SubsLink(TimeBasedStampModel):
  title = models.CharField(("Subs Link Adı"), max_length=50)
  descriptions = models.CharField(("Subs Link Açıklama"), max_length=350)
  href = models.URLField(("Url"), max_length=200)

  class Meta:
    verbose_name = "Subs Link"
    verbose_name_plural = "Subs Linkler"

  def __str__(self) -> str:
      return self.title
# Subs Link ORM End