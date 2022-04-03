# S3 업로드

### 설치할 패키지
```
npm i aws-sdk util
```

### 버킷 정책 설정
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::BUCKET_NAME/*"
        }
    ]
}
```

### CORS 설정
```
[
    {
        "AllowedOrigins": [ "*" ],
        "AllowedMethods": [ "GET", "PUT", "POST", "HEAD" ],
        "AllowedHeaders": [ "*" ],
        "ExposeHeaders": [ "x-amz-server-side-encryption", "x-amz-request-id", "x-amz-id-2" ],
        "MaxAgeSeconds": 3000
    }
]
```