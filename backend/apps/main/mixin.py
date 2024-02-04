from django.db import models
from storages.backends.s3boto3 import S3Boto3Storage

# TimeBasedStamp Model Start
class TimeBasedStampModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
# TimeBasedStamp Model End


# AWS Storage
class MyS3Storage(S3Boto3Storage):
    location = 'media/'  # S3'te dosyaların saklanacağı alt dizin
    file_overwrite = False  # Aynı isimde dosya varsa üzerine yazmaz
    default_acl = 'public-read'