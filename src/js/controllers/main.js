var db = firebase.firestore();
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', e =>  {
    e.preventDefault();
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;
        firebase.auth().createUserWithEmailAndPassword(correo, contraseña)
        .then(() => {
            console.log('Usuario Registrado');
        })
       
    }
);


function paraIrALogin() {
    location.href = '../';
}
  