const firebaseConfig = {
    apiKey: "AIzaSyBqqntxLoP7UCPs2ymB_KVxTMjnqowvh_A",
    authDomain: "c-93-bc28d.firebaseapp.com",
    databaseURL: "https://c-93-bc28d-default-rtdb.firebaseio.com",
    projectId: "c-93-bc28d",
    storageBucket: "c-93-bc28d.appspot.com",
    messagingSenderId: "854671221185",
    appId: "1:854671221185:web:8f44d36f3a5ca8ff610f40",
    measurementId: "G-R70ZMYB4G9"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  function addUser() 
  { user_name = document.getElementById("user_name").value;
   firebase.database().ref("/").child(user_name).update({ purpose : "adding user" 
});
 }