//Questao1

function igualarpopulacao (popA, taxaCrescimentoA, popB, taxaCrescimentoB) {
    let anos = 0;
    while (popA < popB) {
        popA *= 1 + (taxaCrescimentoA / 100);
        popB *= 1 + (taxaCrescimentoB / 100);
        anos++;
    }
    return anos;
}

const popA = 80000;
const taxaCrescimentoA = 3;
const popB = 200000;
const taxaCrescimentoB = 1.5;

const tempoParaIgualar = igualarpopulacao (popA, taxaCrescimentoA, popB, taxaCrescimentoB);

console.log(`E necessario: ${tempoParaIgualar} anos para que a populacao do A passe ou seja igual a populacao do pais B.`);
