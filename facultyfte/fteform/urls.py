from django.urls import path
from . import views

app_name = 'fteform'

urlpatterns = [
    path('', views.index, name='index'),
    path('<int:faculty_id>/', views.facultyDetail, name='detail'),
    path('newFaculty', views.newFaculty, name='newFaculty'),
    path('<int:faculty_id>/add/', views.add, name='add'),
]