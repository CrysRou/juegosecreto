let numeroSecreto = 0;
let intentos = 0;
let listaNumerossorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{

        //el usuario no acerto
        if(numeroDeUsuario>numeroSecreto){

        asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p','el numero secreto es mayor');
        }
        intentos ++;
        limpiarCaja();

    }
    return;
}


function limpiarCaja(){
   document.querySelector('#valorUsuario').value = '';
   
}


function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*10)+1;

    console.log(numeroGenerado);
    console.log(listaNumerossorteados);
    //si ya sorteamos todos los numeros

    if(listaNumerossorteados.length == numeroMaximo){
        asignarTextoElemento('p','ya se jugaron todos los numeros');

    }else{
   //si el numero generado esta incluido en la lista 
   if (listaNumerossorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
   }else{
    listaNumerossorteados.push(numeroGenerado);
    return numeroGenerado;
   }
    }

}

function condicionesIniciales() {
    asignarTextoElemento('h1','juego del numero secreto');
    asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de numeros
    condicionesIniciales();
    //generar el numero ale
    //desabilitar el boton
    //inicializar el numeros de inten
    document.querySelector('#reiniciar').setAttribute('disabled','true');

    
}

condicionesIniciales();