$(function () {
  showStds();
});
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
  push,
  child,
  get,
  update,
} from "https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnGmo8KSzDFmTcWGrX83dl8TRCqzv9D-E",
  authDomain: "university-system-2017.firebaseapp.com",
  databaseURL: "https://university-system-2017-default-rtdb.firebaseio.com",
  projectId: "university-system-2017",
  storageBucket: "university-system-2017.appspot.com",
  messagingSenderId: "62486902525",
  appId: "1:62486902525:web:a6573bf3c819e42070f094",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var database = getDatabase(app);

//Listen to any changes in my Collections
var studentCollection = ref(database, "/Students");
onValue(studentCollection, (snapshot) => {
  var STdData = snapshot.val();
  console.log(STdData);
});

//Delete Function
window.deleteStd = deleteStd;
function deleteStd(stdID) {
  var updates = {};
  updates[`/Students/${stdID}`] = null;
  update(ref(database), updates);
}
