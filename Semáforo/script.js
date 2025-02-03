let segundos = 0;
let running = false;
let intervalo;

function cores(){

    document.getElementById("corUm").style.backgroundColor = "#ddd9ce";
    document.getElementById("corDois").style.backgroundColor = "#ddd9ce";
    document.getElementById("corTres").style.backgroundColor = "#ddd9ce";

    segundos++;

    if(segundos === 1){
        document.getElementById("corTres").style.backgroundColor = "green";
    } else if(segundos === 3){
        document.getElementById("corDois").style.backgroundColor = "yellow";
    } else if(segundos === 5){
        document.getElementById("corUm").style.backgroundColor = "red";
    } else if(segundos > 5){
        segundos = 0;
    }
}

function iniciar(){
    if(!running){
        intervalo = setInterval(cores, 1000);
        running = true;
    }
}
