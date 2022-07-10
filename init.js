import { Appwrite } from 'appwrite';
export const sdk = new Appwrite();
sdk
  .setEndpoint('http://localhost/v1') // Replace this with your endpoint
  .setProject('62cb325d60c59ac70b17'); // Replace this with your ProjectID