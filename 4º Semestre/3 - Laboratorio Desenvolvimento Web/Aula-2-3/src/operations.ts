/*
  Este arquivo esta armazenando as funções que serao usadas neste projeto que é um projeto exemplo de
como criar e rodar testes usando 'jest', que é um framework de gerenciamento e criação de testes.
  Quando criamos uma função neste arquivo, nao necessariamente tornamos possivel instantaneamente 
chamar esta função em outro arquivo, precisamos fazer a exportação dessa função como algo individual,
como da pra ver na ultima linha deste arquivo.

*/

//aqui temos uma arrow function, onde a funçao é declarada como uma variavel que recebe parametros, que estao entre
//parenteses, e estes parametros quando adicionamos "=>" a frente, podemos dizer que o codigo entende que o que vira
//em seguida é parte de uma função que lidará com os parametros ja informados. O nome da função sera o nome da variavel.
const sum = (a: number, b: number) => a + b; // < 0 ? null : a + b);

const sumPositives = (a: number, b: number) => {
  if (a < 0 || b < 0) {
    //se 'a' for menor que 0 ou se 'b' for menor que 0 faremos o proximo bloco
    throw Error('Os parametros precisam ser positivos'); //se validarmos a condição acima, faremos o codigo retornar um erro intencional com a mensagem entre parenteses
  }
  return a + b; //quando damos um throw error o codigo vai parar no local onde o erro foi gerado, entao o return só é executado quando o codigo nao gera o erro que criamos
};

const div = (a: number, b: number) => {
  return a / b;
};

const computeEquation = (a: number, b: number, c: number) => {
  //esta função esta fazendo uso de duas outras funcoes que ja foram construidas dentro deste mesmo arquivo,
  //a primeira variavel recebera o resultado da funcao sum com os parametros sendo passados desta funcao para a
  //funcao sum
  const totalSum = sum(a, b);

  //a segunda variavel vai chamar a funcao div que tambem ja foi construida anteriormente, passando como parametro
  //a variavel acima, que trara a soma dos parametros, e o terceiro parametro desta funcao em que estamos,
  //sendo assim ele ira executar totalSum/c
  //de forma mais ilustrada:
  //function soma(a,b){
  //  total = a + b;
  //return total;
  //}

  //soma(1, 1); isto ira chamar a funçao acima, fazendo passo a passo:
  // soma(a, b) == soma(1, 1) == (a == 1) e (b == 1)
  //
  //total = 1 + 1;
  //retorne total;  total == 2;

  const totalDiv = div(totalSum, c);
};
export default { sum, sumPositives, div, computeEquation }; //o export torna possivel que as funcoes citadas entre as {} sejam chamadas em outros arquivos fora este
