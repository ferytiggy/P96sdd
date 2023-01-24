var firebaseConfig = {
    apiKey: "AIzaSyD-ikkKRWuRnGHeYI-xgm5SveJZMDDbZYE",
    authDomain: "tiggwitter3333.firebaseapp.com",
    databaseURL: "https://tiggwitter3333-default-rtdb.firebaseio.com",
    projectId: "tiggwitter3333",
    storageBucket: "tiggwitter3333.appspot.com",
    messagingSenderId: "767207452789",
    appId: "1:767207452789:web:7e25c9a2d6e410d33e483c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//a la variable nombreservidor se le da el item room_name de local storage
room_name=localStorage.getItem("room_name");
//se muestra en el componente con el id nombredeservidor el nombre del servidor guardado
//document.getElementById("nombredeservidor").innerHTML= nombreservidor;
//se crea una función
function pi(){
    //regresa al usuario a la pantala principal
    window.location.replace("salas.html")
}
function getData()
{
     firebase.database().ref("/").on('value', function(snapshot) {
     document.getElementById("nombredeservidor").innerHTML = "";
     snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Inicio del código
     //se manda a la consola la variable room_names con la clave room_names
        console.log("Room_name " + Room_names);
        row= "<div class='room_name' id=" + Room_names+ "onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div> <hr>";
        document.getElementById("nombredeservidor").innerHTML += row;
     //Final del código
     });});}
getData();
function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "servidorpublico.html";
  }
  