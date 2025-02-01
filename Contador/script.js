let numero = 0;

document.getElementById("mais").addEventListener("click", function(){

    numero++;
    document.getElementById("visor").textContent = numero;
});

document.getElementById("menos").addEventListener("click", function(){

    if(numero <= 0){
        return;
    }

    numero--;
    document.getElementById("visor").textContent = numero;
});

document.getElementById("zerar").addEventListener("click", function(){
    numero = 0;
    document.getElementById("visor").textContent = 0;
});