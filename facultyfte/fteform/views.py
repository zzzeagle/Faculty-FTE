from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse
from django.template import loader
from rest_framework import viewsets
from .serializers import FacultySerializer

from .models import Faculty, FTE

# Create your views here.


class FacultyView(viewsets.ModelViewSet):
    serializer_class = FacultySerializer
    queryset = Faculty.objects.all()


def index(request):
    recent_faculty = Faculty.objects.order_by('id')[:5]
    context = {'recent_faculty': recent_faculty}
    return render(request, 'fteform/index.html', context)


def add(request, faculty_id):
    faculty = get_object_or_404(Faculty, pk=faculty_id)
    try:
        newAppointmentFTE = request.POST['newAppointmentFTE']
        newClinicalFTE = request.POST['newClinicalFTE']
    except ():
        return
    else:
        newFTE = FTE(faculty=faculty)
        newFTE.appointmentFTE = newAppointmentFTE
        newFTE.clinicalFTE = newClinicalFTE
        newFTE.save()
    return HttpResponse("You are adding to %s." % faculty_id)


def newFaculty(request):
    if request.method == 'POST':
        try:
            newFacultyName = request.POST['newFacultyName']
            newFacultyNetid = request.POST['newFacultyNetid']
            newAppointmentFTE = request.POST['newAppointmentFTE']
            newClinicalFTE = request.POST['newClinicalFTE']
        except:
            return
        else:
            newFaculty = Faculty()
            newFaculty.name = newFacultyName
            newFaculty.netid = newFacultyNetid
            newFaculty.save()
        return HttpResponse("New Faculty Added")
    else:
        return render(request, 'fteform/newFaculty.html',)


def facultyDetail(request, faculty_id):
    faculty = get_object_or_404(Faculty, pk=faculty_id)
    return render(request, 'fteform/detail.html', {'faculty': faculty})