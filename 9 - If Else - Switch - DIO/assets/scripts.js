function numeroPositivo(num) {
  const ehNegativo = num < 0;
  const maiorQueDez = num > 10;

  if(ehNegativo) {
    return "Esse numero é negativo!";
  } else if (!ehNegativo && maiorQueDez) {
    return "Esse numero é positivo e maior que 10!"
  }

  return "Esse numero é positivo!"
}

console.log(numeroPositivo(40))



// SWITCH / CASE

function getAnimal(id) {
  switch(id) {
    case 1:
      return "cão";
      case 2:
        return "gato";
        case 3:
          return "passaro";
            default:
              return "peixe";
  }
}

getAnimal(1)
getAnimal(4)
getAnimal("1")