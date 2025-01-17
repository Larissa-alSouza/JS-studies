window.document.getElementById('adicao').onclick = function() {
    var num1 = window.document.getElementById('n1')
    var num2 = window.document.getElementById('n2')

    var valornum1 = Number.parseInt(num1.value)
    var valornum2 = Number.parseInt(num2.value)

    var resultado = valornum1 + valornum2

    var resultadoElement = window.document.getElementById('resultado');
    if (resultadoElement) {
        resultadoElement.textContent = 'O resultado é: ' + resultado;
    }
}

window.document.getElementById('subtracao').onclick = function() {
    var num1 = window.document.getElementById('n1')
    var num2 = window.document.getElementById('n2')

    var valornum1 = Number.parseInt(num1.value)
    var valornum2 = Number.parseInt(num2.value)

    var resultado = valornum1 - valornum2

    var resultadoElement = window.document.getElementById('resultado');
    if (resultadoElement) {
        resultadoElement.textContent = 'O resultado é: ' + resultado;
    }
}

window.document.getElementById('multiplicacao').onclick = function() {
    var num1 = window.document.getElementById('n1')
    var num2 = window.document.getElementById('n2')

    var valornum1 = Number.parseInt(num1.value)
    var valornum2 = Number.parseInt(num2.value)

    var resultado = valornum1 * valornum2

    var resultadoElement = window.document.getElementById('resultado');
    if (resultadoElement) {
        resultadoElement.textContent = 'O resultado é: ' + resultado;
    }
}

window.document.getElementById('divisao').onclick = function() {
    var num1 = window.document.getElementById('n1')
    var num2 = window.document.getElementById('n2')

    var valornum1 = Number.parseInt(num1.value)
    var valornum2 = Number.parseInt(num2.value)

    var resultado = valornum1 / valornum2

    var resultadoElement = window.document.getElementById('resultado');
    if (resultadoElement) {
        resultadoElement.textContent = 'O resultado é: ' + resultado;
    }
}