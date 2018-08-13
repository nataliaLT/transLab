let formulario = document.getElementById('formulario');
//funcion para guardar usuarios 
function registrar(){
    const correo= document.getElementById('correo').value;
    const contraseña= document.getElementById('contraseña').value;
    firebase.auth().createUserWithEmailAndPassword(correo, contraseña)
    .the((Response)=>{
        location.href= "../index.html"
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

//............................................................Login...............................
//guardo en una variable los datos que ingreso para poder manejar el evento
let inicio= document.getElementById('inicio');

//funcion para ingresar usuarios registrados 
function login(evento) {
    // preventDefault() detiene el evento, en este caso el envio no ocurre.
    evento.preventDefault();
    const correo2 = document.getElementById('correo2').value;
    const contraseña2 = document.getElementById('contraseña2').value;

        firebase.auth().signInWithEmailAndPassword(correo2, contraseña2)
        .then((Response)=> {
          location.href ="home.html";
        })
        .catch(function(error) {
            let errorCode = error.code;
            alert(errorCode);
        });
    };

//se ejecuta la funcion
inicio.addEventListener('submit', login);


//funcion para asegurarse que el usuario ingreso con exito
function observador (){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log('existe')
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          console.log('no existe')
          // ...
        }
      });
      
}
observador();