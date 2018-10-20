let formulario = document.getElementById('formulario');
//funcion para guardar usuarios 
function registrar(){
    const correo= document.getElementById('correo').value;
    const contraseña= document.getElementById('contraseña').value;
    firebase.auth().createUserWithEmailAndPassword(correo, contraseña)
    .the((Response)=>{
        location.href= "home.html";
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

//................................... menu
// //funcionalidad del side Menú
// function toggleMenu() { // añadir función onclick="toggleMenu()" al botón del nav bar y al botón cerrar.
//   if (sideMenu.className.indexOf("menu_closed") >= 0) { // primero revisamos si la clase d-none esta
//     openMenu();  // si esta la clase quiere decir que el menú esta cerrado, asi que llamamos la funcion para abrirlo
//   } else {
//     closeMenu(); //si no esta la clase, le indicamos que cierre el menu
//   }
// }

// function openMenu() {
//   sideMenu.classList.remove('menu_closed'); // quitando clase display-none
//   sideMenu.classList.add('menu_open');
// }

// function closeMenu() {
//   sideMenu.classList.add('menu_closed'); // añadimos la clase display-none
//   sideMenu.classList.remove('menu_open');
// }

