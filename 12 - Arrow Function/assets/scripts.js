/* 

Arrow FUNCTION =    =>




EXEMPLO 


const helloWorld = function(){
  return "Hello World";
}                                      \/ com ARROW FUNCTION



const helloWorld = () => {
  return "Hello World";
}
                                       \/ Não precisa do return com Arrow Function funcao pequena

const helloWorld = () => "Hello World";


const soma = (a, b) => a + b;

soma(4, 6);

const soma = a => a;

soma(4);

SINTAXE 


FAZ HOISTING

soma(2, 4);

  function soma(a, b) {
    return a + b/
  }

NÃO FAZ HOISTIN ARROW FUNCTION

soma (2, 4)

  const soma = (a, b) => a + b;









  THIS NÃO PODE SER USADO NO ARROW FUNCTION 
  NÃO EXISTE O OBJETO ARGUMENTS EM ARROW FUNCTION
  CONSTRUTUR NÃO PODE SER USADO DENTRO DE ARROW FUNCTION 

*/
