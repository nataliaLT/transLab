const saldo = document.getElementById('saldo');

//Funcion para llamar a la api
saldo.addEventListener('click',()=>{
    let tarjeta=document.getElementById("nTarjeta").value;//variable que guardara el numero de tarjeta ingresado
    fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${tarjeta}`)//llamamos a la api
    .then(response => response.json())
    .then(data=>{
        console.log(data);
        renderInfo(data);
})
});
const renderInfo= (data)=>{
    mostrarSaldo.innerHTML =data.saldoTarjeta;
}
