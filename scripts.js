function trocaSwitch() {
    let html = document.documentElement
    /*Vamos verificar se o html contem o light*/
    if (html.classList.contains('light')){
       html.classList.remove('light')
    }
    else {
        html.classList.add('light')
    }
}

function calculaImc() {
    //Recupera os dados do usuário que estão nas caixas de textos//
     let peso = document.getElementById("peso").value
     let altura = document.getElementById("altura").value
     let imc = (peso/(altura*altura))
     alert (imc.toFixed(2))
     
}

function SwitchNov() {
    
}