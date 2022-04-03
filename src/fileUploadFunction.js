import AWS from 'aws-sdk';

export function onFileUpload(e) {
    const ACCESS_KEY = '계정 PUBLIC ACCESS KEY입력';
    const SECRET_ACCESS_KEY = '계정 SECRET ACCESS KEY입력';
    const REGION = "버킷리전";
    const S3_BUCKET = 'test-upload-sili';

    AWS.config.update({
      accessKeyId: ACCESS_KEY,
      secretAccessKey: SECRET_ACCESS_KEY
    });

    const myBucket = new AWS.S3({
      params: { Bucket: S3_BUCKET},
      region: REGION,
    });
    const file = e.target.files[0];
    console.log(file);
    console.log(file.name);
    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: S3_BUCKET,
      Key: file.name
    };
    
    myBucket.putObject(params)
      .on('httpUploadProgress', (evt) => {
        alert("SUCCESS")
      })
      .send((err) => {
        if (err) console.log(err)
      })
  }