from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.contrib.auth import authenticate
from .models import User
from .serializers import UserSerializer


@api_view(["GET"])
def user_list(request):
    page = int(request.query_params.get("page"))
    page_size = int(request.query_params.get("pagesize"))
    if page <= 0 or page_size <= 0:
        return Response("Required page and pagesize bigger than Zero")
    else:
        offset = (page-1) * page_size
        limit = page_size * page
        user = User.objects.all()[offset:limit]
        return Response(UserSerializer(user, many=True).data)
    
@api_view(["GET"])
def user_detail(request, pk):
    try:
        user = User.objects.get(pk=pk)
        return Response(UserSerializer(user).data)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
        




@api_view(["POST"])
def login(request):
    username = request.data.get("username")
    password = request.data.get("password")
    if not username or not password:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    user = authenticate(username=username, password=password)
    if user is None:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    return Response("Login Success")