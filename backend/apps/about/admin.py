from django.contrib import admin
from .models import *
# Register your models here.
class BiographyAdmin(admin.ModelAdmin):
    list_display = ('id', 'date', 'content') 

admin.site.register(Biography, BiographyAdmin)