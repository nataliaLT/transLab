
function registrar(){
let correo = document.getElementById('correo').value;
let contraseña = document.getElementById('contraseña').value;

firebase.auth().createUserWithEmailAndPassword(correo, contraseña)
.catch(function(error) {
    
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
  

}

