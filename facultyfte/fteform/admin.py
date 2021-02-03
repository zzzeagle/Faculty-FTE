from django.contrib import admin

# Register your models here.
from .models import Faculty, FTE


class FTEInline(admin.TabularInline):
    model = FTE
    extra = 3

class FacultyAdmin(admin.ModelAdmin):
    list_display = ('name', 'netid','active')
    inlines = [FTEInline]


admin.site.register(Faculty, FacultyAdmin)