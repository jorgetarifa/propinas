 const myForm = document.querySelector('.calcular')
 const myBtn = document.querySelector('.btn-calcular')

// Prevent default
myForm.addEventListener( 'submit', (e) => e.preventDefault() )



//Captura valor input y operaciones
const resultado = () => {

 
    let inputCuenta = Number(document.querySelector('.input-cuenta').value)
    let inputPropina = Number(document.querySelector('.input-propina').value)
    
    let total = inputCuenta * inputPropina;
    let propina = total / 100;
    let totalResumen = inputCuenta + propina;

    switch(true) {
        case inputCuenta < 0 || inputCuenta === 0 || inputPropina < 0 || inputPropina > 100:
            alert('Ingrese un monto valido')
            inputCuenta = ""
            break;
        
            default: 

            text1 = `Total de la cuenta: $${inputCuenta}`
            text2 = `Propina: $${propina}`
            text3 = `Total a pagar:  $${totalResumen}`
            text4 = 'Resumen'
         
   
}

          document.querySelector('.total-cuenta').innerHTML = text1; 
          document.querySelector('.propina').innerHTML = text2;
          document.querySelector('.total-pagar').innerHTML = text3;
          document.querySelector('.title-resumen').innerHTML = text4;
          


}

// onclick btn
myBtn.addEventListener( 'click', resultado )




    
   


