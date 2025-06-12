from rest_framework import serializers
from .models import CustomUser , Vendor  , Item , ItemType , ItemCategory , Company , Purchase # ,Category
from django.contrib.auth.password_validation import validate_password

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'phone', 'password', 'password2', 'first_name', 'last_name']

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Passwords do not match."})
        return attrs

    def create(self, validated_data):
        # Remove password2 because it's not part of the model
        password = validated_data.pop('password')
        validated_data.pop('password2')

        # Create user instance
        user = CustomUser(**validated_data)
        user.set_password(password)  # Hash the password
        user.save()
        return user

# class CategorySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Category
#         fields = ['id', 'name']



class VendorSerializer(serializers.ModelSerializer):
   # categories = CategorySerializer(many=True, read_only=True)  # GET ke liye

    # categories = serializers.PrimaryKeyRelatedField(
    #     many=True, queryset=Category.objects.all()
    # )
    class Meta:
        model = Vendor
        fields = '__all__'

class VendorMinimalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = ['vendor_name']


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'

class ItemCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemCategory
        fields = '__all__'

class ItemTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemType
        fields = '__all__'

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'

class PurchaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Purchase
        fields = '__all__'
