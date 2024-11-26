from django.shortcuts import render
from rest_framework import generics
from ..models import *
from ..serializers import *
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.exceptions import ValidationError
from django.conf import settings
from django.contrib.auth import get_user_model
from authsystemAPI.models import UserAccount as UserAccount


class MyTokenObtainPairViewSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        serializer_class = UserSerializerWithToken
        for key, value in serializer_class(self.user).data.items():
            data[key] = value
        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairViewSerializer

class registerUser(generics.CreateAPIView):
    queryset = UserAccount.objects.all()
    serializer_class = UserSerializerWithToken

    def create(self, request, *args, **kwargs):
        username = request.data.get('username')
        email = request.data.get('email')

        # Check if the username or email already exists
        if UserAccount.objects.filter(username=username).exists():
            raise ValidationError({'username': 'A user with that username already exists.'})

        if UserAccount.objects.filter(email=email).exists():
            raise ValidationError({'email': 'A user with that email already exists.'})

        # Proceed with the normal creation process
        return super().create(request, *args, **kwargs)

class getUserProfile(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = ([IsAuthenticated])
    
    def get_object(self):
        return self.request.user

class updateUserProfile(generics.UpdateAPIView):
    serializer_class = UserSerializerWithToken
    permission_classes = [IsAuthenticated]
    
    def get_object(self):
        return self.request.user

class getUsers(generics.ListAPIView):
    queryset = UserAccount.objects.all()
    serializer_class = UserSerializerWithToken
    permission_classes = ([IsAdminUser])

class getUsersById(generics.RetrieveAPIView):
    queryset = UserAccount.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAdminUser]

class updateUser(generics.UpdateAPIView):
    queryset = UserAccount.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAdminUser]

class deleteUser(generics.DestroyAPIView):
    queryset = UserAccount.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAdminUser]
