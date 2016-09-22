from django.db import models
from django.contrib.auth.models import User

class CarMake(models.Model):
    name = models.CharField(max_length=25)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('name',)

class CarModel(models.Model):
    year = models.IntegerField(default=1900)
    make = models.ForeignKey(CarMake, related_name='models')
    model = models.CharField(max_length=100, default='')
    engine_displacement = models.DecimalField(
        max_digits=3,
        decimal_places=1,
        default=0.0
    )
    engine_number_of_cylinders = models.IntegerField(default=0)
    horsepower = models.IntegerField(default=0, blank=True)
    torque = models.IntegerField(default=0, blank=True)
    zero_to_sixty_acceleration_time = models.DecimalField(
        max_digits=3,
        decimal_places=1,
        default=0.0
    )

    def __str__(self):
        return '{} {}'.format(self.make.name, self.model)

class Review(models.Model):
    user = models.ForeignKey(User, related_name='reviews')
    car_model = models.ForeignKey(CarModel, related_name='reviews')
    timestamp = models.DateTimeField(auto_now_add=True)
    review_text = models.TextField(default='')

    def __str__(self):
        return self.car_model.make.name

    class Meta:
        ordering = ('user',)
