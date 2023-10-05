//Questao4

const salInicial = parseFloat(prompt("Salario inicial do funcionario = "));


let anoContratacao = 1995;
let salAtual = salInicial;

for (anoContratacao; anoContratacao <= 2023; anoContratacao++) {
   
    var aumentoPercentual = (anoContratacao === 1995) ? 0.015 : (aumentoPercentual * 2);
    
    
    const aumento = salAtual * aumentoPercentual;
    salAtual += aumento;
}

console.log(`O salario atual do funcionario em 2023 R$ ${salAtual.toFixed(2)}`);
