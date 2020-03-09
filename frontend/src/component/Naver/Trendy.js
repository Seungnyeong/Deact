import React from 'react';
import axios from 'axios';



class Trendy extends React.Component{
    const client_id = "";
    const client_secret = "";
    const api_url = "https://openapi.naver.com/v1/datalab/search'";

    let request_body = {
        "startDate" : "",
        "endDate" : "",
        "timeUnit" : "",
        "keywordGroups": [
            {
                "groupName": "한글",
                "keywords": [
                    "한글",
                    "korean"
                ]
            },
            {
                "groupName": "영어",
                "keywords": [
                    "영어",
                    "english"
                ]
            }
        ],
        "device": "pc",
        "ages": [
            "1",
            "2"
        ],
        "gender": "f"
    };

}



