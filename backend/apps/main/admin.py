from django.contrib import admin
from .models import *
# Register your models here.

class MainBackgroundAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'subtitle','image') 

admin.site.register(MainBackground, MainBackgroundAdmin)