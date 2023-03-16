
var firebaseConfig = {
      apiKey: "AIzaSyDPcCLSPPYkKVcNDysTlS_a0KtpiHwidHc",
      authDomain: "newkwitter-63cc9.firebaseapp.com",
      databaseURL: "https://newkwitter-63cc9-default-rtdb.firebaseio.com",
      projectId: "newkwitter-63cc9",
      storageBucket: "newkwitter-63cc9.appspot.com",
      messagingSenderId: "681720030403",
      appId: "1:681720030403:web:5400802f5fe1bdf6906e76"
    };
  
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+ user_name + "!";

function addRoom(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
         });
         localStorage.setItem("room_name", room_name);
         window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name", name);
         window.location="kwitter_page.html";

}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}