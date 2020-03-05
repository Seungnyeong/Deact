from django.urls import path
from . import views

app_name = "users"

urlpatterns = [
    path("user/", views.user_list),
    path("user/<int:pk>", views.user_detail),
    path("login", views.login),
]