import {Account, Client} from 'appwrite';

const client = new Client();
const collectionID = "64b161184a94727ef962";   // your collection ID
const databaseID="64b15d93e6806e38960d"   // Your database ID

const buckedID="64b15e1adca2b107d312"
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64b15c712d1fd775710f');

const account = new Account(client);

export { client,collectionID,databaseID,buckedID,account }; // Finally export the client to be used in projects.