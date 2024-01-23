from django.db import models
from autoslug import AutoSlugField

# TimeBasedStamp Model Start
class TimeBasedStampModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
# TimeBasedStamp Model End



# LabelCategory ORM Start
class LabelCategory(TimeBasedStampModel):
    name = models.CharField(("Label Name"), max_length=50)

    class Meta:
        verbose_name_plural = "Label Category"

    def __str__(self) -> str:
        return self.name
# LabelCategory ORM End


# CategoryBlog ORM Start
class CategoryBlog(TimeBasedStampModel):
    name = models.CharField(("Category Name"), max_length=50)
    slug = AutoSlugField(
        populate_from="name", editable=False, always_update=True, blank=True
    )
    class Meta:
        verbose_name_plural = "Category Blog"

    def __str__(self) -> str:
        return self.name
# CategoryBlog ORM End


# Blog ORM Start
class Blog(TimeBasedStampModel):
    category = models.ForeignKey(
        CategoryBlog, verbose_name=("Category"), on_delete=models.CASCADE
    )
    title = models.CharField(("Title"), max_length=200)
    content = models.TextField(("Content"))
    label = models.ManyToManyField(LabelCategory, verbose_name=("Label's"))
    image = models.ImageField(
        ("Image"),
        upload_to="Blog",
        height_field=None,
        width_field=None,
        max_length=None,
        blank=True,
    )
    slug = AutoSlugField(
        populate_from="title", editable=False, always_update=True, blank=True
    )

    class Meta:
        verbose_name_plural = "Blog"

    def __str__(self) -> str:
        return self.title
# Blog ORM End