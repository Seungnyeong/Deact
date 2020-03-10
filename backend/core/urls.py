from django.urls import path
from . import views

app_name = "core"

urlpatterns = [
    path("naver/", views.NaverLab),
    path("search/", views.Search)
]