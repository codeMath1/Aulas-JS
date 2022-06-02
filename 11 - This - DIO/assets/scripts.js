// Dentro de um objeto (metódo) ela vai se referir a uma função:


const pessoa = {
  firstName: 'Diego',
  lastName: 'Vieira',
  getFullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};


pessoa.getFullName();


// console.log(this) [Window GLOBAL] sem função.

/// outras maneiras de usar this - CALL  // APPLY sera repassado dentro de um ARRAY ;D

const pessoa1 = {
    name: 'Miguel',
};

const animal = {
    name: 'Rapaaaaz',
};

function getSomething() {
  console.log(this.name);
}

getSomething.callouApply(pessoa1);

// CALL

const myObj = {
  num1: 2,
  num2: 4,
};

function soma(a, b){
  console.log(this.num1 + this.num2 + a + b);
}

  soma.call(myOjb, 1, 5);
  //12


  // bind - CLONA A ESTRUTURA DA FUNÇÃO ONDE É CHAMADA E APLICA O VALOR DO OBJETO PASSADO COMO PARAMENTRO 

  const retornaNomes = function () {
    return this.nome;
  };

  let bruno = retornaNomes.bind({nome : 'Bruno'});

  bruno();