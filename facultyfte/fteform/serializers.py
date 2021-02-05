from rest_framework import serializers
from .models import Faculty, FTE


class FTESerializer(serializers.ModelSerializer):
    class Meta:
        model = FTE
        fields = ('faculty', 'effectiveFrom', 'effectiveTo', 'appointmentFTE', 'clinicalFTE')


class FacultySerializer(serializers.ModelSerializer):
    fte = FTESerializer(many=True, required=False, read_only=True)

    class Meta:
        model = Faculty
        fields = ('id', 'netid', 'name', 'fte')