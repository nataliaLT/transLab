
var db = firebase.firestore();
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', e =>  {
    e.preventDefault();
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;
    if(correo.length != 0 && contraseña.length) {
        console.log('if')
        firebase.auth().createUserWithEmailAndPassword(correo, contraseña)
        .then(Response => {
            const userId = Response.user.uid;
            firebase.database().ref('users/' + userId).set( {
               correo: correo 
            })
            console.log('ya envie los datos');
            
                location.href="home.html";
            
            
        })
    }
});




