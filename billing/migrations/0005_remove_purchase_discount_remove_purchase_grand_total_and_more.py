# Generated by Django 5.2 on 2025-05-28 09:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('billing', '0004_purchase'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='purchase',
            name='discount',
        ),
        migrations.RemoveField(
            model_name='purchase',
            name='grand_total',
        ),
        migrations.RemoveField(
            model_name='purchase',
            name='sub_total',
        ),
        migrations.RemoveField(
            model_name='purchase',
            name='tax',
        ),
    ]
