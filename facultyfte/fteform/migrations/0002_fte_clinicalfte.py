# Generated by Django 3.1.6 on 2021-02-02 16:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fteform', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='fte',
            name='clinicalFTE',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=3),
            preserve_default=False,
        ),
    ]