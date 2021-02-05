from django.db import models


class Faculty(models.Model):
    netid = models.CharField(max_length=8)
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name


class FTE(models.Model):
    faculty = models.ForeignKey(Faculty, related_name='fte', on_delete=models.CASCADE)
    effectiveFrom = models.DateField()
    effectiveTo = models.DateField()
    appointmentFTE = models.DecimalField(max_digits=3, decimal_places=2)
    clinicalFTE = models.DecimalField(max_digits=3, decimal_places=2)

    def __str__(self):
        return 'Appointment FTE: %G; Clinical FTE: %G' % (self.appointmentFTE, self.clinicalFTE)
