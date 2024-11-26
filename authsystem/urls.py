from django.conf import settings
from django.urls import path, include, re_path
from django.contrib import admin
from django.views.generic import TemplateView
from django.conf.urls.static import static

def index_view(request, path=''):
    return TemplateView.as_view(template_name='dist/index.html')(request)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),
    path('', index_view),  # Route for the root path
    path('api/products/', include('swanzbackendAPI.urls.product_urls')),
    path('api/categories/', include('swanzbackendAPI.urls.category_urls')),
    path('api/users/', include('swanzbackendAPI.urls.user_urls')),
    path('api/orders/', include('swanzbackendAPI.urls.order_urls')),
    # Add additional API or app-specific paths as needed
]

# Serve media files during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# Catch-all route for client-side routing
urlpatterns += [
    path('<path:path>', index_view),
]
