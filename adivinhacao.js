let numeroSecreto = Math.floor(Math.random() * 10) + 1; 
let tentativa;

while (tentativa !== numeroSecreto) {
    tentativa = parseInt(prompt("Adivinhe o número (entre 1 e 10): "));

    if (tentativa === numeroSecreto) {
        alert("Parabéns! Você acertou! 🎉");
    } else {
        alert("Errou! Tente novamente. ");
    }
}
