//crea una función
function iniciar(){
    //en la variable username se almacena lo que contiene el id Usuario
    username=document.getElementById("Usuario").value;
    //lo mismo que con username
    passcode=document.getElementById("Contraseña").value;
    //se guarda en local storage lo que contiene la variable username con el nombre de usuario
    localStorage.setItem("Usuario",username);
    //si la contraseña es = a Tiggy130 cambiar a la sala principal sino mostrar un mensaje de contraseña incorrecta
    if (passcode=="Tiggy130") {
        window.location="salas.html"
    }else{
     document.getElementById("Contraseña").value="contraseña incorrecta =("
        //console.log("hola")
    }
    
}