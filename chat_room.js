
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

//user_name=localStorage.getItem("user_name");
//document.getElementById("user_name").innerHTML="welcome" + user_name + "!";

function addRoom() {
    room_name =document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room_name"
    });
    localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("room name" + Room_names);
row="<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
document.getElementById("output").innerHTML +=row;

    //End code
    });});}
getData();
function redirectToRoomName(name) {
    console.log (name);
    localStorage.setItem("room_name", name);
    window.location="kwitter_page.html";
}
