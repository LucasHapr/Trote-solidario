function condicional() {
    let kits = Number(document.getElementById("kits").value)
    let pontos
    if (kits >= 80) {
        pontos = 5000
    }
    else if ((kits < 80) && (kits >=64)) {
        pontos = 4000
    }
    else if ((kits < 64) && (kits >= 40)){
        pontos = 2500
    }
    else if ((kits < 40) && (kits >= 16)) {
        pontos = 1000
    }
    else if ((kits < 16) && (kits >= 0)) {
        pontos = 0
    }
    else {
        pontos = -1 // indica que a quantidade de kita é negativa
    }
    if (pontos == -1){
        document.getElementById("pontos").innerHTML = "Impossível calcular"
    }
    else {
        document.getElementById("pontos").innerHTML = "A pontuação da equipe é: " + pontos
    }
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