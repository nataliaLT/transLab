const assert = require('chai').assert; // esta variable va siempre, ya que me dice que usare chai para pasar mis test
global.window = global;
require('../src/js/controllers/main');//ruta para enlazar mis test con las funciones 

describe('validar formato de email', ()=>{
    describe('debería existir el arroba',()=>{
        it('el correo debería tener solo un arroba', ()=>{
            assert.equal(validarEmail("jkiy@jdhe.com"), true);
            assert.equal(validarEmail("jkiy@@jdhe.com"), false);
            assert.equal(validarEmail("jkiy.com"),false);
        });
        it('el arroba debe estar antes del dominio',()=>{
            assert.equal(validarEmail(".com@jkiy"), false);
            assert.equal(validarEmail("natalia@gmail.com"), true);
        });
    });
});
( describe('el mail debe tener un dominio', ()=>{
    it('comienza con un punto y luego solo caracteres del alfabeto',()=>{
        assert.equal(validarEmail('jkiy@jkiy'), false);
        assert.equal(validarEmail('jkiy@jkiy.'),false);
    });
}));

(describe('validar formato de contraseña',()=>{
    
        it('deberia tener solo números',()=>{
            assert.equal(validarContraseña('hdgfuegsj'), false);
            assert.equal(validarContraseña('agdgd¬∞#¢@'), false);
            assert.equal(validarContraseña(8345),true);
        });
   
        it('debería tener 8 números', ()=>{
         assert.equal(validarContraseña(12345678), true);
        // assert.equal(validarContraseña(123456789101112), false);
        });
    }));
