from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from . import models
# Register your models here.

@admin.register(models.User)
class CustomUserAdmin(UserAdmin):
    
    list_display = (
        "username",
        "bio",
        "first_name",
        "last_name",
        "avator",
        "gender",
        "bio",
        "birthDate",
        "currency",
        "language",
        "login_method",
        "language",
        "email_verified",
        "email_secret",
            
    )