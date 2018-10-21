
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
