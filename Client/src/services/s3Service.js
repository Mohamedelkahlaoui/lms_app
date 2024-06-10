import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { getS3Credintials } from './config';

const client = new S3Client({
  credentials: getS3Credintials(),
  region: 'eu-north-1',
});

const bucketName = 'elkahlaoui';
const bucketURL = `https://${bucketName}.s3.amazonaws.com/`;

const uploadFile = async (courseId, directory, fileName, file, fileType) => {
  const key = `${courseId}/${directory}/${Date.now()}_${fileName}`;
  const params = {
    Bucket: bucketName,
    Key: key,
    Body: file,
    ContentType: fileType,
  };
  const command = new PutObjectCommand(params);

  try {
    await client.send(command);
    console.log('File uploaded successfully:', key);
    return bucketURL + key;
  } catch (error) {
    console.error('Error uploading file to S3:', error);
    throw new Error('Error uploading file to S3');
  }
};

const deleteFile = async (fileURL) => {
  const key = fileURL.split('.com/')[1];
  const params = { Bucket: bucketName, Key: key };
  const command = new DeleteObjectCommand(params);

  try {
    await client.send(command);
    console.log('File deleted successfully:', key);
  } catch (error) {
    console.error('Error deleting file from S3:', error);
    throw new Error('Error deleting file from S3');
  }
};

const s3Service = { uploadFile, deleteFile };
export default s3Service;
