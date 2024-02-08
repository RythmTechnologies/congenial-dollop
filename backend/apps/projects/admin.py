from django.contrib import admin
from .models import Project,Technologies, Category

class ProjectAdmin(admin.ModelAdmin):
    # Admin panelinde listelenen sütunlar
    list_display = ('slug','name', 'source', 'created_at', 'updated_at')
    list_editable = ('name', 'source',)
    # Arama çubuğu ile arama yapılacak alanlar
    search_fields = ['name', 'description']

    # Filtreleme seçenekleri
    list_filter = ('created_at', 'updated_at')

    readonly_fields = ('slug',)

admin.site.register(Project, ProjectAdmin)
admin.site.register(Technologies)
admin.site.register(Category)
