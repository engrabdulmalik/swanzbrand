from django.urls import path
from swanzbackendAPI.views import order_views as views



urlpatterns = [
  path('add/', views.addOrderItems, name='order-add'),
  path('myorders/', views.getMyOrders, name='my-orders'),
  path('<str:pk>/', views.getOrderById, name='user-order>'),
  path('<str:pk>/pay/', views.updateOrderToPaid, name='pay-order'),
  path('<str:pk>/deliver/', views.updateOrderToDelivered, name='deliver-order'),
  path('', views.getOrders.as_view(), name='orders'),
  
]