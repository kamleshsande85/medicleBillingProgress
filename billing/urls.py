from django.urls import path ,include
from .views import RegisterView , VendorViewSet  ,ItemViewSet,ItemCategoryViewSet,ItemTypeViewSet,CompanyViewSet ,PurchaseViewSet #,CategoryListView                                
from rest_framework_simplejwt.views import TokenObtainPairView ,TokenRefreshView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'vendors',VendorViewSet)
router.register(r'items', ItemViewSet)
router.register(r'itemtype', ItemTypeViewSet)
router.register(r'itemcategory', ItemCategoryViewSet)
router.register(r'company', CompanyViewSet)
router.register(r'purchase', PurchaseViewSet)



urlpatterns = [
    path('',include(router.urls)),
    path('register/',RegisterView.as_view(),name='register'),
    path('login/',TokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('token/refresh/',TokenRefreshView.as_view(),name='token_refresh'),
    # path('categories/', CategoryListView.as_view(), name='category-list'),
    # path('vendors',VendorViewSet.as_view(),name='vendor-view'), 

]