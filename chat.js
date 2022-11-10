// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
    apiKey: "AIzaSyBD-G61zV09KxKv4EZdBwpFaEH_DpJeMUg",
    authDomain: "let-s-chat-web-app-aa34d.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-aa34d-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-aa34d",
    storageBucket: "let-s-chat-web-app-aa34d.appspot.com",
    messagingSenderId: "1016122085577",
    appId: "1:1016122085577:web:8bc39199ce9822a9e9bd18"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
   
}



