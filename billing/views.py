from django.shortcuts import render
from rest_framework import generics , viewsets 
from .models import CustomUser , Vendor , Item , ItemType , ItemCategory , Company , Purchase #,Category
from .serializers import RegisterSerializer , VendorSerializer ,ItemSerializer, ItemCategorySerializer , ItemTypeSerializer ,CompanySerializer , PurchaseSerializer ,VendorMinimalSerializer #,CategorySerializer 
from rest_framework.permissions import AllowAny , IsAuthenticated

class RegisterView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny] 

class VendorViewSet(viewsets.ModelViewSet):
    queryset=Vendor.objects.all()
    # serializer_class = VendorSerializer 
    permission_classes = [IsAuthenticated]
    def get_serializer_class(self):
        if self.request.query_params.get("view") == "minimal":
            return VendorMinimalSerializer
        return VendorSerializer  # Default full serializer



# class CategoryListView(generics.ListAPIView):
#     queryset = Category.objects.all()
#     serializer_class = CategorySerializer


class ItemViewSet(viewsets.ModelViewSet):
    queryset=Item.objects.all()
    serializer_class = ItemSerializer
    
class ItemCategoryViewSet(viewsets.ModelViewSet):
    queryset=ItemCategory.objects.all()
    serializer_class = ItemCategorySerializer
    
class ItemTypeViewSet(viewsets.ModelViewSet):
    queryset=ItemType.objects.all()
    serializer_class = ItemTypeSerializer
    
class CompanyViewSet(viewsets.ModelViewSet):
    queryset=Company.objects.all()
    serializer_class = CompanySerializer
    
class PurchaseViewSet(viewsets.ModelViewSet):
    queryset=Purchase.objects.all()
    serializer_class = PurchaseSerializer