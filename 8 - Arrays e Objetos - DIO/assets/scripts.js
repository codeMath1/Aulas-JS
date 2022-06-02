/*************************************************\
|                 arrays                          |
\*************************************************/

/* 

  function sum(x, y, z) {
  return x + y + z;
}

  const numbers = [1, 2, 3];

  console.log(sum(...numbers));
                                           /\ Chamando tamanho

  ---------------------------


  function confereTamanho(...args) {
    console.log(args.length)
  }

  confereTamanho() // 0
  confereTamanho(1, 2) // 2
  confereTamanho(3, 4, 5) // 3

                                        /\ Verificando tamanho
*/

/*************************************************\
|                 Obejos                          |
\*************************************************/

/* 

  const user = {
    id: 42,
    displayName: 'jdoe'
    fullName: {
      firstName: 'John',
      lastName: 'Doe'
    }
};

  function userId({id}) {
    return id;
}

  function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
  }

  userId(user)
  // 42

  getFullName(user)
  //John Doe

*/