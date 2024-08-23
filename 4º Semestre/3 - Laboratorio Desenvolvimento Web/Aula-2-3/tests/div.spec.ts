import operations from '../src/operations';

describe('Division', () => {
  it('should return 4 if a equals 8 and b equals 2', () => {
    const total = operations.div(8, 2);
    expect(total).toEqual(4);
  });
  it('should return 4 if a equals 8 and b equals 2', () => {
    //queremos que a função traga um valor especifico, entao colocamos dentro da função mockReturnValue,
    //ela vai inserir valores que farao que o retorno seja o experado.
    jest.spyOn(operations, 'div').mockReturnValue(25);
  });
  it('should return 4 if a equals 8 and b equals 2', () => {
    //usando a função mockImplementationOnce, nos alteramos o comportamento interno da função que estamos importando, podendo
    //alterar o que ela faz mas sem alterar sua assinatura, que sao os parametros. A função original nao é alterada definitivamente,
    //isto apenas fara uma implementação de teste com base na função ja pronta que estamos puxando
    jest
      .spyOn(operations, 'div')
      .mockImplementationOnce((a: number, b: number) => {
        return a + b;
      });
    const total = operations.div(8, 2);
    expect(total).toEqual(4);
  });
});
