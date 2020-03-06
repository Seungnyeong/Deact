from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):


    class Meta:
        model = User
        fields = ("id", "username", "first_name", "last_name", "email", "avator")

    def validate_count(self, attrs):
        value = User.objects.count()
        return super().validate(value)