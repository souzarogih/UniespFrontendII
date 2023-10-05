//Questao2

function contarNumeros() {
    let numerosPares = 0;
    let numerosImpares = 0;
    
    for (let i = 1; i <= 10; i++) {
        const num = parseInt(prompt(`Digite um numero ${i}:`));
        
        if (num % 2 === 0) {
            numerosPares++;
        } else {
            numerosImpares++;
        }
    }
    
    return { numerosPares, numerosImpares };
}

const resultados = contarNumeros();

console.log(`Quantidade de pares: ${resultados.numerosPares} e quantidade de impares: ${resultados.numerosImpares}`);
alert(`Quantidade de numeros pares: ${resultados.numerosPares} e quantidade de numeros impares: ${resultados.numerosImpares}`);
