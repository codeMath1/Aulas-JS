var prova1 = parseFloat(prompt("Adicione sua nota da prova A1 [0.0 a 3.0]"));
while (prova1 > 3 || prova1 < 0) {
  prova1 = prompt("Insira uma nota entre 0 a 3, por favor! [A1]");
}

var prova2 = parseFloat(prompt("Adicione sua nota da prova A2 [0.0 a 3.0]"));
while (prova2 > 3) {
  prova2 = prompt("Insira uma nota entre 0 a 3, por favor! [A2]");
}

var trab1 = parseFloat(prompt("Adicione sua nota do trabalho A1 [0.0 a 2.0]"));
while (trab1 > 2) {
  trab1 = prompt("Insira uma nota entre 0 a 2, por favor! [T1] ");
}

var trab2 = parseFloat(prompt("Adicione sua nota do trabalho A2 [0.0 a 2.0]"));
while (trab2 > 2) {
  trab2 = prompt("Insira uma nota entre 0 a 2, por favor! [T2] ");
}

var freq = parseInt(prompt("Adicione sua frequencia [0 a 100%]"));
while (freq > 100 || freq < 0) {
  freq = prompt("A frequencia tem que ser entre 0 a 100%, refaça, por favor.");
}


let provas = prova1 + prova2; 
let trabalhos = trab1 + trab2;
let soma = provas + trabalhos;


if (soma >= 6 && freq > 75) {
  alert(`Parabéns, você atingiu ${soma} de média e ${freq}% de frequência! - PARABÉNS.`)
} else if (soma < 6 && freq > 75) {
  alert(`Você não atingiu a média com a sua nota que é ${soma}, mas atingiu ${freq}% de frequência.`);
} else if (soma <6 && freq < 75) {
  alert(`Você não atingiu nem a média com a sua nota e nem a frequência ficando com ${soma} de média e ${freq}% de frequência.`);
} else {
  alert(`Você atingiu a média com ${soma} mas acabou ficando abaixo da frequência com ${freq}% de frequência.`);
}