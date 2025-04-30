const { PutObjectCommand } = require('@aws-sdk/client-s3');
const s3 = require('./s3Client');
const { v4: uuidv4 } = require('uuid');

async function uploadPDFtoS3(buffer) {
  const fileName = `reports/${uuidv4()}.pdf`;

  const command = new PutObjectCommand({
    Bucket: process.env.S3_BUCKET_NAME,
    Key: fileName,
    Body: buffer,
    ContentType: 'application/pdf',
  });

  await s3.send(command);

  return `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
}

module.exports = { uploadPDFtoS3 };
