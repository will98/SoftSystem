const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET
});
module.exports = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'unmsm-sgt',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key: function (req, file, cb) {
            console.log(file);
            const name = `${Date.now()}.pdf`
            req.body.URL_archivo = `https://unmsm-sgt.s3.us-east-2.amazonaws.com/${name}`
            cb(null, name);
        }
    })
});