// FOR - LOOP DENTRO DE ELEMENTOS ITERÁVEIS (ARRAYS, STRINGS);


  function multiplicaPorDois(arr) {
    let multiplicados = [];

    for(let i = 0; i < arr.lenght; i++) {
      multiplicados.push(arr[i] * 2);
    }

    return multiplicados;
}

  const meusNumeros = [2, 33, 456, 356, 40];

  multiplicaPorDois(meusNumeros);

// FOR...In - Loop entre propriedades enumeráveis de um objeto.


  function forInExemplo(obj) {
    for(prop in obj) {
      console.log(prop);
    }
  }

    const meuObjeto = {
      nome: "João",
      idade: "20",
      cidade: "Salvador"
    }

    forInExemplo(meuObjeto);

    /// 

    function forInExemplo(obj) {
      for(prop in obj) {
        console.log(obj[prop]);
      }
    }
  
      const meuObjeto1 = {
        nome: "João",
        idade: "20",
        cidade: "Salvador"
      }
  
      forInExemplo(meuObjeto1);


      //// For..of - Loop entre estruturas iteráveis (arrays, strings).

      function logLetras(palavra){
        for(letra of palavra){
          console.log(letra);
        }
      }

      const palavra = "abacaxi";

      logLetras(palavra)


      function logNumeros(nums) {
        for(num of nums) {
          console.log(num);
        }
      }

      const nums = [30, 20, 233, 2];

      logLetras(nums)

    // While

    function exemploWhile() {
      let num = 0

      while(num <= 5){
        console.log(num);
        num++;
      }
    }


    // Do..While 

    function exemploDoWhile() {
      let num = 0;

      do {
        console.log(num);
        num++;
      } while(num <= 5)
    }

    exemploDoWhile()


    function exemploDoWhile1() {
      let num = 6;

      do {
        console.log(num);
        num++;
      } while(num <= 5)
    }

    exemploDoWhile1()