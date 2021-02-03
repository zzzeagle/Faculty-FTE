from django.db import models


class Faculty(models.Model):
    netid = models.CharField(max_length=8)
    name = models.CharField(max_length=100)
    active = models.BooleanField()
    def __str__(self):
        return self.name


class FTE(models.Model):
    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE)
    appointmentFTE = models.DecimalField(max_digits=3, decimal_places=2)
    clinicalFTE = models.DecimalField(max_digits=3, decimal_places=2)
