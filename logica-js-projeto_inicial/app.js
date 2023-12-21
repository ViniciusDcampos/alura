alert("Bem vindo ao jogo do número secreto!")
let numeroMaximo = parseInt(Math.random() * 10 + 1);//aqui eu gero um valor maximo aleatorio
console.log(numeroMaximo);
let numeroSecreto = parseInt(Math.random() * numeroMaximo +1);// o meu numéro secreto está entre 0 e o o numero máximo + 1 
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// laço de repetição que faz os loops enquanto o chute for dirente do numeroSecreto
while (chute != numeroSecreto) {
    chute = prompt(`Digite um número entre 1 e ${numeroMaximo}.`);
    if (chute == numeroSecreto) {
        break;
    } else { // verifica o valor de chute com o do numero secreto
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
    } tentativas++;
}
let tenta = tentativas > 1 ? "tentativas!" : "tentativa!";
alert(`Parabéns você acertou o número secreto (${numeroSecreto}) com ${tentativas} ${tenta}`);