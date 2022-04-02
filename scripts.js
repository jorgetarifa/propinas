

 let inputCuenta = document.querySelector('.input-cuenta').value
 let inputPropina = document.querySelector('.input-propina').value



const resultado = () => {
    let total = inputCuenta * 100;
    let propina = total / inputPropina;
}

function calcular() {
    

   
    console.log(inputCuenta);
    
   
    switch(true) {
        case inputCuenta < 0 || inputCuenta === 0:
            alert('Ingrese un monto valido')
            inputCuenta = ""
            break;
            default: 
            resultado()
    }
   
    
}



