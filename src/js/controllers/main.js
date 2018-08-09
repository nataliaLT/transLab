window.validarEmail = function(email){
    if(email.indexOf('@') < 0){
        return false;
    }

    const simbolo = email.split('@');
    if(simbolo.length != 2){
        return false;
    }

    if(simbolo[1].indexOf('.') < 0){
        return false;
    }

    const domSimbolo = simbolo[1].split('.');
    if(domSimbolo.length != 2){
        return false;
    }

    if(domSimbolo[0].length < 1){
        return false;
    }

    if(domSimbolo[1].length < 1){
        return false;
    }

    return true;
}

window.validarContraseña= function(contraseña){
    if(typeof(contraseña != )){
        return false;
    }
    if(contraseña.length > 8){
        return false;
    }
    return true;
}