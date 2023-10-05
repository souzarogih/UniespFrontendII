//Questao6

const capitalInicial = parseFloat(prompt("Informe o capital inicial:"));
const taxaJurosMensal = parseFloat(prompt("Informe a taxa de juros mensal:"));
const tempoMeses = parseInt(prompt("Informe o tempo do investimento:"));

function calcularMontante(capitalInicial, taxaJurosMensal, tempoMeses) {
  
    taxaJurosMensal = taxaJurosMensal / 100;

    const montante = capitalInicial * Math.pow(1 + taxaJurosMensal, tempoMeses);

    
    return montante.toFixed(2);
}

const result = calcularMontante(capitalInicial, taxaJurosMensal, tempoMeses);

msg = `O montante apos ${tempoMeses} meses sera  ${result}`

console.log(msg);
alert(`O montante apos ${tempoMeses} meses sera ${result}`);
