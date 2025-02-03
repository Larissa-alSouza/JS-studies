
let segundos = 0, minutos = 0, horas = 0;
let intervalo;
let rodando = false;

function atualizar(){
    segundos++

    if(segundos === 60){
        segundos = 0;
        minutos++;
    }

    if(minutos === 60){
        minutos = 0;
        horas++
    }

    document.getElementById("visor").textContent = 
        (horas < 10 ? "0" : "") + horas + ":" + 
        (minutos < 10 ? "0" : "") + minutos + ":" + 
        (segundos < 10 ? "0" : "") + segundos;
}

function iniciar(){
    if(!rodando){
        intervalo = setInterval(atualizar, 1000);
        rodando = true;
    }
}

function pausar() {
    clearInterval(intervalo);
    rodando = false;
}

function zerar(){
    clearInterval(intervalo);
    segundos = minutos = horas = 0;
    document.getElementById("visor").textContent = "00:00:00";
    rodando = false;
}

