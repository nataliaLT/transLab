// window.onload = () =>{
//   firebase.auth().onAuthStateChanged( user =>{
//       if(user){ //Si está logeado, mostraremos la opción loggedIn
//           perfil(user);
//       }
//   });
// }
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
      currentUser = firebase.auth().currentUser;
      // console.log(currentUser)
      firebase.database().ref(`users/${currentUser.uid}`)
          .once('value')
          .then(() => {
              document.getElementById('informacion-usuario').innerHTML = `<p >${currentUser.email}</p>`
          })
          .catch((error) => {
              console.log("Database error > " + JSON.stringify(error));
          });
  }
});
// function perfil(user) { 
// //   firebase.auth().onAuthStateChanged((user) => {
// //     if (user) {
// //         currentUser = firebase.auth().currentUser;
// //         // console.log(currentUser)
// //         firebase.database().ref(`users/${currentUser.uid}`)
// //             .once('value')
// //             .then(() => {
// //                 document.getElementById('informacion-usuario').innerHTML = `<p >${currentUser.email}</p>`
// //             })
// //             .catch((error) => {
// //                 console.log("Database error > " + JSON.stringify(error));
// //             });
// //     }
// // });

// }


// let ingresarTarjeta = document.getElementById('numTar');
// const btnGuardar = document.getElementById('btnGuardar');
// //guardar datos
// btnGuardar.addEventListener('click', ()=>{
//   let tarjeta = ingresarTarjeta.value;

// const db = firebase.database();
// db.ref(`users/${currentUser}`).child(`NumeroDeTarjeta`).push(tarjeta).key;
// console.log(tarjeta);
// //   firebase.database().ref('users').push({
// //     numeroTarjeta: tarjeta
// //   });
// });

function guardarTarjetas(){

  let numTar = document.getElementById('numTar');
  console.log(numTar)
    let tarjeta = numTar.value;
    console.log(tarjeta);
  const db = firebase.database();
  db.ref(`users/${currentUser.uid}`).child(`NumeroDeTarjeta`).push(tarjeta).key;

  document.getElementById('tar').innerHTML = 
  `<div class="contenedorNTarjeta"><p>${tarjeta}</p></div>`
 
  
  }
