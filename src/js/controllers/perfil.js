//......................guardar tarjeta
function guardar(tarjeta2){
    firebase.database().ref('/usuario').push(tarjeta2)
    .then(()=>{
      alert('Se agrego la tarjeta');
      console.log('entra funcion')
    })
    .catch(function(erro){
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }

let tarjeta1 = document.getElementById('numTar').value;
console.log(tarjeta1);
btnGuardar.addEventListener('click',()=>{
    console.log('hola');
    let tarjeta2 = {
        tarjeta : tarjeta1.value
    };
    guardar(tarjeta2);
});