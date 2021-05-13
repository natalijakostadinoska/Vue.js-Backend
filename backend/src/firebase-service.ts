import * as admin from "firebase-admin";

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://testing-24f58-default-rtdb.firebaseio.com/"
});

export default admin;