import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDwE5LPFQpmGVEOMMIhFzDWrOBK8D-w0Rg",
  authDomain: "nba-full-f7680.firebaseapp.com",
  databaseURL: "https://nba-full-f7680.firebaseio.com",
  projectId: "nba-full-f7680",
  storageBucket: "nba-full-f7680.appspot.com",
  messagingSenderId: "287180268184",
  appId: "1:287180268184:web:dbcdfdd0eb88ee1c5526ed",
  measurementId: "G-BD0VWJP62P",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref("articles");
const firebaseTeams = firebaseDB.ref("teams");
const firebaseVideos = firebaseDB.ref("videos");

const firebaseLooper = (snapshot) => {
  const data = [];
  snapshot.forEach((childSnapshot) => {
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key,
    });
  });
  return data;
};

export {
  firebase,
  firebaseDB,
  firebaseArticles,
  firebaseTeams,
  firebaseVideos,
  firebaseLooper,
};
