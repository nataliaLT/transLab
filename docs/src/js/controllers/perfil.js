        
let ingresarTarjeta = document.getElementById('numTar');
const btnGuardar = document.getElementById('btnGuardar');
//guardar datos
btnGuardar.addEventListener('click', ()=>{
  let tarjeta = ingresarTarjeta.value;

  firebase.database().ref('usuario').push({
    numeroTarjeta: tarjeta
  });
});

firebase.database().ref('usuario')
.on('value', function(snapshot){
  let html = '';
  snapshot.forEach((e)=>{
    let element = e.val();
    let  tarjeta= element.numeroTarjeta;
    html += '<div class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title">'+tarjeta+'</h5>'
  });
  tar.innerHTML = html;
});
