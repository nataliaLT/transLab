let formulario = document.getElementById('formulario');
//funcion para guardar usuarios 
function registrar(){
    const correo= document.getElementById('correo').value;
    const contraseña= document.getElementById('contraseña').value;
    firebase.auth().createUserWithEmailAndPassword(correo, contraseña)
    .the((Response)=>{
        location.href= "home.html";
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
}
formulario.addEventListener('submit', registrar)

