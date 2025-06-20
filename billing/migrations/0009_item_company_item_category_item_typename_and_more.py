# Generated by Django 5.2 on 2025-06-11 07:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('billing', '0008_alter_purchase_discount_alter_purchase_tax'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='Company',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='item',
            name='category',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='item',
            name='typename',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='item',
            name='item_name',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
