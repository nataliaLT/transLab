
const saldo = document.getElementById('saldo');
//Funcion para llamar a la api
saldo.addEventListener('click',()=>{
    
    let tarjeta=document.getElementById("nTarjeta").value;//variable que guardara el numero de tarjeta ingresado
    fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${tarjeta}`)//llamamos a la api
    .then(response => response.json())
    .then(data=>{
        const dataBip = Object.values(data)
        let saldoBip = dataBip[2];

        let saldoBipRep = Number(saldoBip.replace(/[$,.]+/g, ""));

        const combo = document.getElementById("selectHorarios");
        const horarios = combo.options[combo.selectedIndex].value;

        const saldoFinal = saldoBipRep - horarios;


        document.getElementById("costoPasaje").innerHTML =
            `<span class='col d-flex justify-content-center p-0 mt-4' id='txtCosto'>COSTO PASAJE</span>
        <span class='col d-flex justify-content-center p-0' id='costoPasaje'>${horarios}</span>`;
        document.getElementById("saldoFinal").innerHTML =
            `<span class='col d-flex justify-content-center p-0 mt-3' id='txtCosto'>SALDO FINAL</span>
        <span class='col d-flex justify-content-center p-0' id='costoPasaje'>${saldoFinal}</span>`;
        console.log(data);
        renderInfo(data);
})
});

