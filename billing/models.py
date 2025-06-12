from django.contrib.auth.models import AbstractUser
from django.db import models
from decimal import Decimal

class CustomUser(AbstractUser):
    phone = models.CharField(max_length=15, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username


class Vendor(models.Model):
    vendor_name = models.CharField(max_length=100)
    company_name = models.CharField(max_length=100)
    gst_number = models.CharField(max_length=20)
    license_details = models.TextField()
    contact_number = models.CharField(max_length=15)
    alternate_contact = models.CharField(max_length=15, blank=True)
    email = models.EmailField(unique=True)
    address = models.TextField()
    state = models.CharField(max_length=50)

    PRIORITY_CHOICES = [
        ("Primary", "Primary"),
        ("Secondary", "Secondary"),
        ("Backup", "Backup"),
    ]
    priority = models.CharField(max_length=10, choices=PRIORITY_CHOICES)

    account_number = models.CharField(max_length=30, blank=True)
    ifsc_code = models.CharField(max_length=20, blank=True)
    pan_number = models.CharField(max_length=20, blank=True)

    # categories = models.ManyToManyField('Category')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.company_name

# class Category(models.Model):
#     name = models.CharField(max_length=50)

#     def __str__(self):
#         return self.name


class Item(models.Model):
    item_name = models.CharField(max_length=100, blank=True)
    category = models.CharField(max_length=100, blank=True)
    typename = models.CharField(max_length=100, blank=True)
    Company = models.CharField(max_length=100, blank=True)
    
    def __str__(self):
        return self.item_name

class ItemCategory(models.Model):
    category = models.CharField(max_length=100)
    
    def __str__(self):
        return self.category

class ItemType(models.Model):
    typename = models.CharField(max_length=100)
    
    def __str__(self):
        return self.ItemType

class Company(models.Model):
    Company = models.CharField(max_length=100)
    
    def __str__(self):
        return self.Company



class Purchase(models.Model):
    vendor_name = models.CharField(max_length=100, blank=False, null=False)
    company_name = models.CharField(max_length=100, blank=False, null=False)
    category_name = models.CharField(max_length=100, blank=False, null=False)
    type_name = models.CharField(max_length=100, blank=False, null=False)
    purchase_date = models.DateField(blank=False, null=False)
    expiry_date = models.DateField(blank=True, null=True)
    item_name = models.CharField(max_length=100, blank=False, null=False)
    quantity = models.IntegerField(blank=False, null=False)
    price_per_item = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        blank=False,
        null=False,
        default=Decimal('0.00')
    )
    sub_total = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        blank=False,
        null=False,
        default=Decimal('0.00')
    )
    discount = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        # blank=True,
        # null=True,
        default=Decimal('0.00')
    )
    tax = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        # blank=True,
        # null=True,
        default=Decimal('0.00')
    )
    grand_total = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        blank=False,
        null=False,
        default=Decimal('0.00')
    )

    def __str__(self):
        return self.vendor_name



