from django.db import models
from apps.main.mixin import TimeBasedStampModel
from autoslug import AutoSlugField
import uuid

# Subs Link ORM Start
class SubLinks(TimeBasedStampModel):
  id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
  title = models.CharField(("Subs Link Adı"), max_length=150)
  description = models.CharField(("Subs Link Açıklama"), max_length=350)
  href = models.CharField(("Url"), max_length=150)

  class Meta:
    verbose_name = "Subs Link"
    verbose_name_plural = "Subs Linkler"

  def __str__(self) -> str:
      return self.title
# Subs Link ORM End