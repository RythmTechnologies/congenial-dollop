from django.contrib import admin
from .models import *
# Register your models here.
class BiographyAdmin(admin.ModelAdmin):
    list_display = ('name', 'id', 'date') 

admin.site.register(Biography, BiographyAdmin)