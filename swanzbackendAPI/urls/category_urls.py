from django.urls import path
from swanzbackendAPI.views import category_views as views

urlpatterns = [

    path('', views.CategoryListView.as_view(), name='category-list'),
    path('<int:category_id>/products/', views.ProductByCategoryView.as_view(), name='products-by-category-id'),
]