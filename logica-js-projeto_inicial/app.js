alert("Bem vindo ao jogo do número secreto!")
let numeroSecreto = 5;
let chute;
let tentativas = 2;

// laço de repetição que faz os loops enquanto o chute for dirente do numeroSecreto
while (chute != numeroSecreto) {
    chute = prompt("Digite seu número: ");
    if (chute == numeroSecreto) {
        alert(`Parabéns você acertou o número secreto (${numeroSecreto})!`);
    } else { //esse trecho faz uma verificação do meu número de tentativas e da as dicas se chute é maior ou menor que o numeroSecreto
        if (tentativas <= 0) {
            alert("Você errou, acabram todas as suas tentativas, reinicie o jogo!!");
            break;
        } else {
            tentativas--;
            if (chute > numeroSecreto) {
                alert(`O número secreto é menor que ${chute}`);
            } else {
                alert(`O número secreto é maior que ${chute}`)
            }
        }
    }
}//teste