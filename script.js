var numeros = []
var posicao = 0
function adicionar(numero) {

    for (var i = 0; i <= 4; i++) {
        document.getElementsByTagName("p")[i].innerText = null
    }
    if (valida(numero) == true) {
        numeros[posicao] = parseInt(numero)
        posicao++
        document.getElementById('txtBox').value = null
        addOption(numero)

    }
    else {
        alert("numero invalido ou repetido")
        document.getElementById('txtBox').value = null
    }
}

function valida(numero) {
    if (numero < 1 || numero > 100 || isNaN(numero))
        return false

    for (let i in numeros) {
        if (numeros[i] == numero)
            return false
    }

    return true


}
function addOption(numero) {
    var lista = document.getElementById("flista");
    var option = document.createElement("option");
    option.text = "O número " + numero + " foi adicionado.";
    lista.add(option);
}

function finalizar() {
    if (numeros.length == 0) {
        alert("numero invalido ou repetido")
        return
    }

    document.getElementById('linha1').innerText += "ao todo temos " + numeros.length + " números"
    document.getElementById('linha1').innerHTML += "<br>"

    var maior = -1
    var menor = 101
    for (var i = 0; i <= numeros.length; i++) {
        if (numeros[i] > maior)
            maior = numeros[i]

        if (numeros[i] < menor)
            menor = numeros[i]
    }

    document.getElementById('linha2').innerText += "o maior número é " + maior + " e o menor é " + menor
    document.getElementById('linha2').innerHTML += "<br>"

    var total = 0
    for (let i in numeros) {
        total += numeros[i]
    }
    document.getElementById('linha3').innerText += "o valor total é: " + total
    document.getElementById('linha3').innerHTML += "<br>"

    document.getElementById('linha4').innerText += "a média é: " + total / numeros.length
    document.getElementById('linha4').innerHTML += "<br>"







}