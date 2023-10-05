//Questao5

const raio = 5; 
const result = calcularAreaPerimetroCirculo(raio);

function calcularAreaPerimetroCirculo(raio) {

    if (raio <= 0) {
        return "Raio invalido. Deve ser maior que zero.";
    }

    const area = Math.PI * Math.pow(raio, 2);

    const perimetro = 2 * Math.PI * raio;

    return {
        area: area.toFixed(2),
        perimetro: perimetro.toFixed(2)
    };
}

if (typeof result === "string") {
    console.log(result); 
} else {
    console.log(`Area do circulo: ${result.area} e Perimetro do circulo: ${result.perimetro}`);
}
