from rest_framework import routers
from django.conf.urls import url, include
from . import views

router = routers.DefaultRouter()
router.register(r'CarMake', views.MakeView)
router.register(r'CarModel', views.ModelView)
# router.register(r'Review', views.ReviewView)
router.register(r'User', views.UserView)

urlpatterns = [
    url(r'^login$', views.login_user, name='login'),
    url(r'^register$', views.register_user, name='register'),
    url(r'^', include(router.urls)),
    url(r'api-auth/', include('rest_framework.urls'))
]
