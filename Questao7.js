//Questao7

var todosAlunos = [ 
    { nome: "Maria Joaquinha", notas: [8, 7.5, 9], curso: "Sistemas para Internet" }, 
    { nome: "Joao Ricardo", notas: [8, 8.5, 5], curso: "Direito" }, 
    { nome: "Jose Henrique", notas: [4, 10, 7], curso: "Administracao" }, 
    { nome: "Pedro da Silva", notas: [6, 7.6, 7.5], curso: "Sistemas para Internet" }, 
    { nome: "Silvana Morais", notas: [6, 7.5, 9.5], curso: "Sistemas de Informacao" }, 
    { nome: "Patricia Castro", notas: [1, 9, 10], curso: "Arquitetura" }, 
    { nome: "Joana Ribeiro", notas: [8, 9, 9], curso: "Contabilidade" }, 
    { nome: "Rafael Rocha", notas: [4, 4, 9], curso: "Sistemas para Internet" }, 
    { nome: "Gustavo Henrique", notas: [8, 7.5, 5], curso: "Sistemas para Internet" }
  ];
  
  function calculaMedia(notas) {
    const totalNotas = notas.reduce((acc, nota) => acc + nota, 0);
    return totalNotas / notas.length;
  }
  
  function imprimirAprovados(listaAlunos) {
    for (const aluno of listaAlunos) {
      const media = calculaMedia(aluno.notas);
      if (media >= 7) {
        console.log(`Nome: ${aluno.nome}`);
        console.log(`Média Aritmética: ${media.toFixed(2)}`);
        console.log(`Curso: ${aluno.curso}`);
        console.log("------------------------------");
      }
    }
  }
  
  imprimirAprovados(todosAlunos);
  