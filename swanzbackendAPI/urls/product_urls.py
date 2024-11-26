from django.urls import path
from swanzbackendAPI.views import product_views as views


urlpatterns = [
    path('', views.getProducts.as_view(), name='products'),
    path('<str:pk>', views.getSingleProduct.as_view(), name='product'),
    path('create/', views.createProduct, name='product-create'),
    path('update/<str:pk>', views.updateProduct, name='product-update'),
    path('upload-image/<str:pk>', views.uploadImage, name='product-upload-image'),
    path('delete/<str:pk>', views.deleteProduct.as_view(), name='product-delete'),
    path('<str:pk>/reviews/', views.createProductReview, name='create-product-review'), 
    
   
]

