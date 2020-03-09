from django.shortcuts import render
from django.http import HttpResponse
import os
import sys
import urllib.request

def NaverLab(request):
    client_id = "GadCA8izUexXJ7fxBdFr"
    client_secret = "cxK6ghKNoo"
    url = "https://openapi.naver.com/v1/datalab/search"
    body = "{\"startDate\":\"2020-01-01\",\"endDate\":\"2020-02-01\",\"timeUnit\":\"month\",\"keywordGroups\":[{\"groupName\":\"바이러스\",\"keywords\":[\"코로나\",\"korean\"]},{\"groupName\":\"정치\",\"keywords\":[\"문재인\",\"moon\"]}],\"device\":\"pc\",\"ages\":[\"1\",\"2\"],\"gender\":\"f\"}"
    request = urllib.request.Request(url)
    request.add_header("X-Naver-Client-Id",client_id)
    request.add_header("X-Naver-Client-Secret",client_secret)
    request.add_header("Content-Type","application/json")
    response = urllib.request.urlopen(request, data=body.encode("utf-8"))
    rescode = response.getcode()
    if(rescode==200):
        response_body = response.read()
        result = response_body.decode('utf-8')
        return HttpResponse(result)
    else:
        return HttpResponse("Fail to Response Reuslt from Naver API Calls")
