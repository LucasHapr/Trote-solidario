function ligarinput(caixa) {
    
    if(caixa == 1) {
        if(document.getElementById("padrao").checked == false) {
            document.getElementById("qtdePadrao").disabled = true
        } else {
            document.getElementById("qtdePadrao").disabled = false
        }
    }
    if(caixa == 2) {
        if(document.getElementById("kit").checked == false) {
            document.getElementById("qtdeKit").disabled = true
        } else {
            document.getElementById("qtdeKit").disabled = false
        }
    }
    if(caixa == 3) {
        if(document.getElementById("suplemento").checked == false) {
            document.getElementById("qtdeSuplementos").disabled = true
        } else {
            document.getElementById("qtdeSuplementos").disabled = false
        }
    }
    if(caixa == 4) {
        if(document.getElementById("arroz").checked == false) {
            document.getElementById("qtdeArroz").disabled = true
        } else {
            document.getElementById("qtdeArroz").disabled = false
        }
    }
    
}

function calcularpont() {
     
     let qtdepadrao = document.getElementById("qtdePadrao").value
     let qtdekit = document.getElementById("qtdeKit").value
     let qtdesuplemento = document.getElementById("qtdeSuplementos").value
     let qtdearroz = document.getElementById("qtdeArroz").value

     let padrao = 50
     let kit = 25
     let suplemento = 10
     let arroz = 5
     let calc = (qtdepadrao*padrao)+(qtdekit*kit)+(qtdesuplemento*suplemento)+(qtdearroz*arroz)
     
     document.getElementById("total").innerHTML = "O total de pontos adicionais é " + calc

}

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