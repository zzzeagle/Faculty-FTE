# Generated by Django 3.1.6 on 2021-02-02 23:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fteform', '0002_fte_clinicalfte'),
    ]

    operations = [
        migrations.AddField(
            model_name='faculty',
            name='active',
            field=models.BooleanField(default=1),
            preserve_default=False,
        ),
    ]
