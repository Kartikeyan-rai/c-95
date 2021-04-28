// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBbM7c0oKYvYvN-nU1QvCN-EXzpI_NouBY",
  authDomain: "kwitter-dedaa.firebaseapp.com",
  databaseURL: "https://kwitter-dedaa-default-rtdb.firebaseio.com",
  projectId: "kwitter-dedaa",
  storageBucket: "kwitter-dedaa.appspot.com",
  messagingSenderId: "1081876824583",
  appId: "1:1081876824583:web:9efc2c53ec25258b96e0a2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
      function redirectToRoomName(name){
        console.log(name);
        localStorage.setItem("Room Name",name);
        window.location="kwitter_page.html";
      }
      username=localStorage.getItem("user_name");
document.getElementById("Welcome").innerHTML="Welcome "+ username +"!";
function room(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({purpouse:"adding a room"});
  localStorage.setItem("Room Name",room_name);
  window.location="kwitter_page.html";
}
getData();