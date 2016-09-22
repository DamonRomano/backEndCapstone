from rest_framework import serializers
from django.contrib.auth.models import User
from car_sort_app.models import *

# Turns Python models into JSON and vice versa.
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = (
            'id',
            'url',
            'username',
            'first_name',
            'last_name'
        )

class CarMakeSerializer(serializers.HyperlinkedModelSerializer):
    models = CarModelSerializer(many=True)
    class Meta:
        model = CarMake
        fields = ('name', 'models')

class CarModelSerializer(serializers.HyperlinkedModelSerializer):
    make = CarMakeSerializer(read_only=True)
    class Meta:
        model = CarModel
        fields = (
        'year',
        'make',
        'model',
        'engine_displacement',
        'engine_number_of_cylinders',
        'horsepower',
        'torque',
        'zero_to_sixty_acceleration_time',
        'url'
        )

class ReviewSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Review
        fields = ('user', 'car_model', 'timestamp', 'review_text')
