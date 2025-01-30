document.getElementById("converter").addEventListener("click", function() {
    let temp = parseFloat(document.getElementById("temp_um").value);
    let unidadeOrigem = document.getElementById("unidade_origem").value;
    let unidadeDestino = document.getElementById("unidade_destino").value;
    let resultado;

    if(isNaN(temp)){
        alert("Por favor, insira um valor numérico!");
        return;
    }

    if(unidadeOrigem === unidadeDestino){
        resultado = temp;
    } else if(unidadeOrigem === 'c' && unidadeDestino === 'f'){
        resultado = (temp * 9/5) + 32;
    } else if(unidadeOrigem === 'c' && unidadeDestino === 'k'){
        resultado = temp + 273.15;
    } else if(unidadeOrigem === 'f' && unidadeDestino === 'c'){
        resultado = (temp - 32) * 5/9;
    } else if(unidadeOrigem === 'f' && unidadeDestino === 'k'){
        resultado = (temp - 32) * 5/9 + 273.15;
    } else if(unidadeOrigem === 'k' && unidadeDestino === 'c'){
        resultado = temp - 273.15;
    } else if(unidadeOrigem === 'k' && unidadeDestino === 'f'){
        resultado = (temp - 273.15) * 9/5 + 32;
    }

    document.getElementById("temp_dois").value = resultado.toFixed(2);

});