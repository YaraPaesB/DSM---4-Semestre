/*
  Este arquivo contem os testes que vamos usar para verificar se nosso codigo esta funcionando, para gerar
os testes estamos usando o framework 'jest', que torna possivel por meio dos comando abaixo fazer testes
automatizados que vao verificar o funcionamento do codigo para que possamos monitorar se vai dar certo ou nao
*/

//aqui importamos o arquivo das funçoes, aquele que estamos exportando, quando damos
//um export no arquivo, tornamos possivel importa-lo em outro local, como estamos fazendo abaixo,
//mas temos que nos atentar la no arquivo exportado, quais funcoes estamos exportando, pois só teremos
//acesso aqui às funçoes que fizemos a exportação entre {} la
import operations from '../src/operations'; //importando o arquivo operations.js que esta na pasta src

//o describe define um bloco composto por varios testes, você pode nomea-lo como quiser para definir
//o que ele vai testar quando
describe('Operations', () => {
  //aqui iniciamos o primeiro teste, cada teste se inicia no comando test ou no comando it, entre parenteses
  //colocamos o nome e descriçao do teste em si
  test('operations.sum(2,3) should return  5', () => {
    //a variavel abaixo vai receber o retorno da funcao soma, que importamos do outro arquivo,
    //os parametros passados vao passar pelas operacoes da funcao que construimos la, retornando um
    //valor especifico para podermos validar. A sintaxe operations.sum(2,3) significa que estamos
    //puxando do arquivo operations.js a funcao sum, e estamos passando os numeros 2 e 3 como parametros para somarmos
    const total = operations.sum(2, 3);
    //o expect faz o que o nome insinua, ele espera que o retorno do teste seja algo em especifico,
    //abaixo esperamos que o teste da soma de 2 + 3 seja 5, caso ele retorne qualquer coisa diferente,
    //o teste ira falhar e nao passara.
    expect(total).toEqual(5);
    //quando terminamos de construir um teste, executamos ele no terminal usando npm run test, que fara
    //com que os testes rodem e exibam se foram executados com sucesso(validaram as informações que esperavam),
    //ou nao
  });
  test('operations.sumPositives(-2,3), should return null', () => {
    let hasError: boolean = false; //criando uma variavel para captar se há erros ou nao, iniciamos ela com o valor falso, o que quer dizer que por hora nao há erros
    //dentro do try, colocamos toda a logica do nosso teste para que ele tente executar com sucesso,
    //caso haja algum erro, ele pulará para o catch, nao importando onde o codigo esta em sua execução
    try {
      const total = operations.sumPositives(-2, 3);
    } catch (error: any) {
      //caso um erro seja detectado, ele entrara neste codigo, que é o que esperamos neste teste,
      //entao a validação deste teste sera com base em um retorno de erro intencional.
      hasError = true; //quando um erro é detectdao e este bloco é executado, a variavel hasError que foi
      //declarada la em cima, recebera o valor true, significando que existem erros no codigo
    }
    //como este teste espera que o erro aconteça e quando o erro acontece a variavel recebe o valor true,
    //trabalharemos com a validação do valor da variavel como true, ou seja, ela espera que o valor dentro
    //da variavel volte como verdadeiro
    expect(hasError).toBe(true);
  });
  //o .skip fara com que este teste em especifico seja ignorado na execução dos testes, tambem temos o .only
  //que fara o contrario, o .only fara com que apenas o teste com esta sintaxe seja executado, ignorando
  //todo o resto.
  test.skip('operations.sumPositives(14,13), should return 27', () => {
    const total = operations.sumPositives(14, 13);

    expect(total).toEqual(27);
  });
});
