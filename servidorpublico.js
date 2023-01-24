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
user_name=localStorage.getItem("Usuario");
console.log(user_name)
document.getElementById("nombreusuario").innerHTML= "!HOLA :D " + user_name + "¡"
room_name = localStorage.getItem("room_name");



//se crea una función
 function mensaje(){
    //la variable msg recive lo que contiene el id mensaje
    msg = document.getElementById("mensaje").value;
    //se manda lo que contiene la variable msg al firebase
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("mensaje").value= "";


 }


 function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("mensaje2").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                console.log(firebase_message_id);
                console.log(message_data);
                name = message_data['name'];
                message = message_data['message'];
                like = message_data['like'];
                name_with_tag = "<h4> Usuario: "+ name + "<img class='user_tick' src=''></h4>";
                message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                like_button = "<button class='hola' id=" + firebase_message_id + " value=" + like + " onclick='likes(this.id)'>";
                span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";


                row = name_with_tag + message_with_tag + like_button + span_with_tag;
                document.getElementById("mensaje2").innerHTML += row;
                //End code
            }
        });
    });
}
getData();
//se crea una función
function sp(){
    //manda al usuario a la pantalla principal
    window.location.replace("salas.html");
}
function likes(mensajeid){
    buttonlike=mensajeid;
    like=document.getElementById(buttonlike).value;
    actualizarlikes=Number(like)+1;
    firebase.database().ref(room_name).child(mensajeid).update({
        like:actualizarlikes
    })
}

