// Your web app's Firebase configuration
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
//la variable user_name obtiene lo que se guardo en local storage
 user_name=localStorage.getItem("Usuario");
 //en el elemento que tiene el id nu se va a poner el mensaje de !hola + el nombre de usuario
  document.getElementById("nu").innerHTML = "¡Hola " + user_name+ " !";

  //la variable room_Name recive el nombre de el servidor
   room_name = localStorage.getItem("room_name");



   //se crea una función
  function AddRoom(){
   //la variable room_name recive el nombre del servidor ingresado en el input y lo guarda
     room_name = document.getElementById("NombreDelServidor").value;
     //se manda el nombre del servidor a la base de datos
     firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
     });
     //se guarda en local storage el nombre de servidor
     localStorage.setItem("room_name",room_name);
     //se manda al ususario a la pantalla para enviear mensajes
   window.location.replace("servidorpublico.html")
  }


  function getData()
 {
      firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      //se manda a la consola la variable room_names con la clave room_names
         console.log("Room_name " + Room_names);
         row= "<div class='room_name' id=" + Room_names+ "onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div> <hr>";
         document.getElementById("output").innerHTML += row;
      //Final del código
      });});}
getData();






// se crea una función
 function Listadeservidores(){
   //envia al usuario a la pagina para ver distintos servidores
   window.location.replace("listaservidores.html");
  }
  //se crea una función
function logout(){
   //manda al usuario a la pagina de inicio de seción
   window.location.replace("index.html");
   //quita el nombre del servidor de local storage
   localStorage.removeItem("room_name")
   //quita el nombre de usuario de local storage
   localStorage.removeItem("usuario")
}