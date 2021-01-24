const admin = require('./node_modules/firebase-admin');
const serviceAccount = require("./sodium-inverter-firebase-adminsdk-70ewr-0aa56175fa.json");
const data = require("./csvjson.json");
const collectionKey = "reservations"; //name of the collection
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sodium-inverter.firebaseio.com"
});
const firestore = admin.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);
if (data && (typeof data === "object")) {
Object.keys(data).forEach(docKey => {
 firestore.collection(collectionKey).doc(docKey).set(data[docKey]).then((res) => {
    console.log("Document " + docKey + " successfully written!");
}).catch((error) => {
   console.error("Error writing document: ", error);
});
});
}