from django.shortcuts import render

# views
from django.contrib.auth.models import User
from django.contrib.auth import logout, login, authenticate
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

import json

from rest_framework import permissions
from rest_framework import viewsets

from car_sort_app.serializers import *
from car_sort_app.models import *

# class UserView(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

class MakeView(viewsets.ModelViewSet):
    queryset = CarMake.objects.all()
    serializer_class = CarMakeSerializer

class ModelView(viewsets.ModelViewSet):
    queryset = CarModel.objects.all()
    serializer_class = CarModelSerializer

    def create(self, request):
        make = CarMake.objects.get(id=request.data['make'])


        new_model = CarModel.objects.create(
            year=request.data['year'],
            model=request.data['model'],
            engine_displacement=request.data['engine_displacement'],
            engine_number_of_cylinders=request.data['engine_number_of_cylinders'],
            horsepower=request.data['horsepower'],
            torque=request.data['torque'],
            zero_to_sixty_acceleration_time=request.data['engine_number_of_cylinders'],
            make=make
        )

        new_model.save()
        return HttpResponse(status=201)

# class ReviewView(viewsets.ModelViewSet):
#     queryset = Review.objects.all()
#     serializer_class = ReviewSerializer

# @csrf_exempt
# def login_user(request):
#     '''Handles the creation of a new user for authentication
#     Method arguments:
#       request -- The full HTTP request object
#     '''
#
#     # Load the JSON string of the request body into a dict
#     req_body = json.loads(request.body.decode())
#
#     # Use the built-in authenticate method to verify
#     authenticated_user = authenticate(
#             username=req_body['username'],
#             password=req_body['password']
#             )
#
#     # If authentication was successful, log the user in
#     success = True
#     if authenticated_user is not None:
#         login(request=request, user=authenticated_user)
#     else:
#         success = False
#
#     data = json.dumps({"success":success})
#     return HttpResponse(data, content_type='application/json')
#
# @csrf_exempt
# def register_user(request):
#     '''Handles the creation of a new user for authentication
#     Method arguments:
#       request -- The full HTTP request object
#     '''
#
#     # Load the JSON string of the request body into a dictionary.
#     req_body = json.loads(request.body.decode())
#
#     # Create a new user by invoking the `create_user` helper method
#     # on Django's built-in User model.
#     new_user = User.objects.create_user(
#                     username=req_body['username'],
#                     password=req_body['password'],
#                     )
#
#     # Commit the user to the database by saving it.
#     new_user.save()
#
#     return login_user(request)
