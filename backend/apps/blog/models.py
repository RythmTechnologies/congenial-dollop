from django.db import models
from tinymce.models import HTMLField
from autoslug import AutoSlugField
from apps.main.mixin import TimeBasedStampModel
from apps.main.mixin import MyS3Storage

# LabelCategory ORM Start
class LabelCategory(TimeBasedStampModel):
    name = models.CharField(("Label Name"), max_length=50)

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = 'Etiket'
        verbose_name_plural = 'Etiketler'
# LabelCategory ORM End


# CategoryBlog ORM Start
class CategoryBlog(TimeBasedStampModel):
    name = models.CharField(("Category Name"), max_length=50)
    slug = AutoSlugField(
        populate_from="name", editable=False, always_update=True, blank=True
    )

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = 'Blog Kategori'
        verbose_name_plural = 'Blog Kategorileri'
# CategoryBlog ORM End


# Blog ORM Start
class Blog(TimeBasedStampModel):
    category = models.ForeignKey(
        CategoryBlog, verbose_name=("Category"), on_delete=models.CASCADE
    )
    title = models.CharField(("Title"), max_length=200)
    content = HTMLField(("Content"))
    label = models.ManyToManyField(LabelCategory, verbose_name=("Label's"))
    image = models.ImageField(
        ("Image"),
        upload_to="Blog",
        storage=MyS3Storage(),
        blank=True,
    )
    slug = AutoSlugField(
        populate_from="title", editable=False, always_update=True, blank=True
    )

    def __str__(self) -> str:
        return self.title

    class Meta:
        verbose_name = 'Blog'
        verbose_name_plural = 'Bloglar'

# Blog ORM End