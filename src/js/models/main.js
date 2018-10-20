//función registro de usuarios
let formulario = document.getElementById('formulario').value;
formulario.addEventListener('submit',e =>{
    let correo = document.getElementById('correo').value;
    let contraseña = document.getElementById('contraseña').value;
    
    firebase.auth().createUserWithEmailAndPassword(correo, contraseña)
    .then((Response =>{
        const userId = Response.user.Id;
        firebase.database().ref('users/' + userId).set({
            correo : correo,
            contraseña: contraseña
        })
        console.log('ya envie los datos');
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      })
    )}
)

function registrar(){
    location.href="home.html";
}


//función login
let registrado = document.getElementById('registrado').value;

function login(){
let correo2 = document.getElementById('correo2').value;
let contraseña2 = document.getElementById('contraseña2').value;

firebase.auth().signInWithEmailAndPassword(correo2, contraseña2)
.then((Response)=>{
    location.href ="home.html";
}).catch(function(error) {

        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
}

registrado.addEventListener('submit', login);
