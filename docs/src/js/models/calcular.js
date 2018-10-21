function calcularSaldo() {
    const tarjeta = document.getElementById('numTar').value;
    document.getElementById('numTar').value = '';
    fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${tarjeta}`)//llamamos a la api
        .then(response => response.json())
        .then(data => {
            const Bip = Object.values(data) //variable que contiene los datos de la tarjeta
            let saldo = Bip[2];

            let sacarSaldo = Number(saldo.replace(/[$,.]+/g, ""));//variable que me da el saldo

            const arrHorario = document.getElementById("seleccionHorario");//array que contiene el select

            const tarifa = arrHorario.options[arrHorario.selectedIndex].value;

            const calculo = sacarSaldo - tarifa;//variable que saca el calculo


            document.getElementById("costoPasaje").innerHTML =
                `<div class="row justify-content-center">
                <div class="col-12-auto tarjetas">
                    <div class="card" style="width: 18rem;">
                        <div class="card-header tituloTarifa">
                         <p class="subtitulo">Costo Pasaje</p>
                        </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item valor">${tarifa}</li>
                        </ul>
                      </div>
                </div>
                
              </div>
              <div class="row justify-content-center">
                <div class="col-12-auto tarjetas">
                    <div class="card" style="width: 18rem;">
                        <div class="card-header tituloTarifa">
                         <p class="subtitulo">Saldo Final</p> 
                        </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item valor">${calculo}</li>
                        </ul>
                      </div>
                </div>
                
              </div>`
        })
}
