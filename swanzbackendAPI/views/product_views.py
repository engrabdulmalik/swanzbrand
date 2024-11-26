from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from ..models import *
from ..serializers import *
from rest_framework.permissions import AllowAny
from django.shortcuts import get_object_or_404


class getProducts(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]
    filter_backends = [DjangoFilterBackend]
    
    def get_queryset(self):
        queryset = Product.objects.all()
        keyword = self.request.query_params.get('keyword', None)
        if keyword:
            queryset = queryset.filter(name__icontains=keyword) | queryset.filter(brand__icontains=keyword)
        return queryset

class getSingleProduct(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]

class deleteProduct(generics.DestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAdminUser]
    
@api_view(['POST'])
@permission_classes([IsAdminUser])
def createProduct(request):
    user = request.user
    category_name = request.data.get('category')
    
    # Check if the category exists
    try:
        category = Category.objects.get(name=category_name)
        print(category)
    except Category.DoesNotExist:
        return Response(
            {"detail": f"No Category matches the given query: {category_name}"},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    # Create the product
    product = Product.objects.create(
        user=user,
        name=request.data.get('name', 'Sample Name'),
        price=request.data.get('price', 0),
        brand=request.data.get('brand', 'Sample Brand'),
        countInStock=request.data.get('countInStock', 0),
        category=category,  # Assign the Category instance
        description=request.data.get('description', '')
    )
    
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateProduct(request, pk):
    try:
        product = Product.objects.get(_id=pk)
    except Product.DoesNotExist:
        return Response({'detail': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)

    data = request.data

    product.name = data.get('name', product.name)
    product.price = data.get('price', product.price)
    product.brand = data.get('brand', product.brand)
    product.countInStock = data.get('countInStock', product.countInStock)
    
    # Fetch the category instance
    try:
        category_id = data.get('category')
        if category_id:
            category = Category.objects.get(_id=category_id)
            product.category = category
    except Category.DoesNotExist:
        return Response({'detail': 'Category not found'}, status=status.HTTP_400_BAD_REQUEST)

    product.description = data.get('description', product.description)

    product.save()

    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def uploadImage(request, pk):
    try:
        product = Product.objects.get(_id=pk)
    except Product.DoesNotExist:
        return Response({'error': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)

    # Update product image
    product.image = request.FILES.get('image')
    product.save()

    return Response({'message': 'Image was uploaded'})

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createProductReview(request, pk):
    user = request.user
    product = Product.objects.get(_id=pk)
    data = request.data

    # 1 - Review already exists
    alreadyExists = product.review_set.filter(user=user).exists()
    if alreadyExists:
        content = {'detail': 'Product already reviewed'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    # 2 - No Rating or 0
    elif data['rating'] == 0:
        content = {'detail': 'Please select a rating'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    # 3 - Create review
    else:
        review = Review.objects.create(
            user=user,
            product=product,
            name=user.first_name,
            rating=data['rating'],
            comment=data['comment'],
        )

        reviews = product.review_set.all()
        product.numReviews = len(reviews)

        total = 0
        for i in reviews:
            total += i.rating

        product.rating = total / len(reviews)
        product.save()

        return Response('Review added')