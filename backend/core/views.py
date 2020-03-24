from django.shortcuts import render
from django.http import HttpResponse
import os
import sys
import urllib.request
import requests
from rest_framework import status

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


def Search(request):
    select = request.GET.get('select', '*')
    volume = request.GET.get('from', 'board.board')
    where = request.GET.get('where', '')
    offset = request.GET.get('offset', None)
    limit = request.GET.get('limit', None)
    custom = request.GET.get('custom', '')
    hilite_fields = request.GET.get('hilite-fields','')
    syn_domain_no = request.GET.get('syn-domain-no', None)
    charset = request.GET.get('charset', 'utf8')
    default_hilite = request.GET.get('default-hilite', '')
    
    
    URL = "http://10.10.18.90:57578/search"
    headers = {'Content-Type': 'text/json; charset=utf-8'}
    body ={
        "select" : select,
        "from" : volume,
        "where" : where,
        "offset" : offset,
        "limit" : limit,
        "custom" : custom,
        "hilite-fields" : hilite_fields,
        "syn-domain-no" : syn_domain_no,
        "charset" : charset,
        "default-hilite": default_hilite
    }
    
    res = requests.post(URL, headers=headers, data=body)

    if(res.status_code == 200):
        return HttpResponse(res, content_type="text/json")
    else:
        return HttpResponse('잘못된 요청입니다.')
    
    
def PopularAPI(request):
    URL = "http://10.10.18.90:57614/ksf/api/rankings?domain_no=0&max_count=10"
    res = requests.get(URL)

    if(res.status_code == 200):
        return HttpResponse(res, content_type="text/json")
    else:
        return HttpResponse('잘못된 요청입니다.00')