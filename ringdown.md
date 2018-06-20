Request (multipart/form-data;boundary=----4e5cb6371623427d9c5a7709e9700dee)

        ------4e5cb6371623427d9c5a7709e9700dee
        Content-Disposition: form-data; name: "callInfo";
        Content-Type: application/json
            
            {
                "callRecordType": 2,
                "deviceType": 0,
                "timeStampForCallStart": "2016-06-18T07:50:30Z",
                "userInfo":
                {
                    "username": "johnsmith",
                    "firmName": "ABC Trading",
                    "timeZoneOffset": "UTC -05:00:00"
                },
                "recordingFile":
                {
                    "fileName": "sVC-20160517-163415-johnsmith-1165020038-1.m4a",
                    "md5Checksum": "14DCA74CB34502CA919966F31FBB8B0D"
                },
                "callRecords":
                [
                    {
                        "ucId" : "fd5cee0fe0184142a4397c92cb71f736.20170508224148",
                        "connectionId": "sVC-20160619-194019",
                        "groupId": 365,
                        "groupName": "Nat Gas Desk",
                        "buttonName": "XYZ Energy",
                        "startAction": "Initiated",
                        "stopAction": "AutoRelease",
                        "duration": "00:00:35",
                        "startTime": "2016-06-18T07:50:30Z",
                        "stopTime": "2016-06-18T08:05:15Z",
                        "farEndUsers": 
                        [
                            {
                                "firmName":"XYZ Firm",
                                "groupId":322, 
                                "groupName": "Energy desk", 
                                "name":"Steve Jones" 
                            },
                            {
                                "firmName":"XYZ Firm",
                                "groupId":323, 
                                "groupName": "Energy desk", 
                                "name":"Jane Doe" 
                            }
                        ]
                    }
                ]
            }
        
        ------4e5cb6371623427d9c5a7709e9700dee
        Content-Disposition: form-data; name: "file"; filename:"sVc-20160619-194019-johndoe-1165020038-1.m4a";
        Content-Type: binary/octet-stream
        
        GIF87a.............,...........D..;
        
        ------4e5cb6371623427d9c5a7709e9700dee
