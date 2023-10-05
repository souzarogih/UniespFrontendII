//Questao3

function calcularSoma(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}

function menorValor(array) {
    let menor = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i];
        }
    }
    return menor;
}

function maiorValor(array) {
    let maior = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    return maior;
}


const n = parseInt(prompt("Quantidade de numeros:"));

const numeros = [];


for (let i = 0; i < n; i++) {
    const numero = parseFloat(prompt(`Digite numero: ${i + 1}:`));
    numeros.push(numero);
}

const menorValor = menorValor(numeros);
const maiorValor = maiorValor(numeros);
const somaValores = calcularSoma(numeros);


console.log(`Valor menor: ${menorValor} | Valor maior: ${maiorValor} | Soma de valores: ${somaValores}`);
alert(`Menor Valor: ${menorValor} | Maior valor: ${maiorValor} | Soma dos valores: ${somaValores}`);
