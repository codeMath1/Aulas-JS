function notasAnuais(prova1, prova2, trab1, trab2, freq) {
  if (prova1 > 3) return 'Você digitou algo errado na prova 1 - Refaça-o';
  if (prova2 > 3) return 'Você digitou algo errado na prova 2 - Refaça-o';
  if (trab1 > 2) return 'Você digitou algo errado no trabalho 1 - Refaça-o';
  if (trab2 > 2) return 'Você digitou algo errado no trabalho 2 - Refaça-o';
  if (freq > 100) return 'Sua frequência não pode passar de 100% - Verifique-a. [ERRO]';
  
  
  let prova = prova1 + prova2;
  let trabalho = trab1 + trab2;
  let soma = prova + trabalho;

  const primeiraFrase = criaPrimeiraFrase(prova1, prova2, trab1, trab2, freq);
  const segundaFrase = criaSegundaFrase(prova1, prova2, trab1, trab2, freq);

  if(soma < 6) {
  return`${primeiraFrase}`;
  } else { 
    (soma > 6) 
    return`${segundaFrase}`;
  }

}


function criaPrimeiraFrase(prova1, prova2, trab1, trab2, freq) {
  let passou = '';  
  let media = '';

  let prova = prova1 + prova2;
  let trabalho = trab1 + trab2;
  let soma = prova + trabalho;

  if(soma < 6 || freq < 75 ) {
     passou = 'reprovado';
  }

  return `Infelizmente você foi ${passou} com ${soma} de média e ${freq}% de frêquencia.`

}

function criaSegundaFrase(prova1, prova2, trab1, trab2, freq) {
  let media = '';
  let palavra = '';

  let prova = prova1 + prova2;
  let trabalho = trab1 + trab2;
  let soma = prova + trabalho;

  if(soma > 6 || freq >= 75 ) {
     media = 'aprovado';
     palavra = 'Parabéns';
  } else {
    media = 'reprovado';
    palavra = 'Infelizmente';
  }

  return `${palavra} você foi ${media} com ${soma} de média e ${freq}% de frêquencia.`

}

//                     p1 p2 t1 t2 freq :D
console.log(notasAnuais(2,1, 2, 2, 80))