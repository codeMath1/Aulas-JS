const alunos = [
	{
		nome: 'Cleber',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'BamBam',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Ratinho',
		nota: 6,
		turma: '2C',
	},
  {
		nome: 'Miguel',
		nota: 3,
		turma: '2C',
	},
];

function alunosAprovados(arr, media) {
  let aprovados = [];

  for(let i = 0; i < arr.length; i++) {
    const {nota, nome} = arr[i];

    if(arr[i].nota >= media) {
      aprovados.push(nome);
    }
  }

  return aprovados;
}

console.log(alunosAprovados(alunos, 5)) 


function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
  nome: 'Maria', 
  idade: 30
}
const pessoa2 = {
  nome: 'Carla', 
  idade: 26
}
const animal = {
  nome: 'Thor', 
  idade: 10,
  raca: 'Pug'
}

console.log(calculaIdade.apply(pessoa1, [7]));