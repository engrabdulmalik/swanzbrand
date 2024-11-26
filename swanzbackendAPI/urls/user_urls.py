from django.urls import path
from swanzbackendAPI.views import user_views as views



urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/', views.getUserProfile.as_view(), name='user-profile'),
    path('profile/update/', views.updateUserProfile.as_view(), name='user-profile-update'),
    path('register/', views.registerUser.as_view(), name='user-register'),
    path('', views.getUsers.as_view(), name='users'),
    path('<str:pk>/', views.getUsersById.as_view(), name='user-by-id'),
    path('delete/<str:pk>/', views.deleteUser.as_view(), name='user-delete'),
    path('update/<str:pk>/', views.updateUser.as_view(), name='user-update'),
]