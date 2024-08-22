import operations, { computeEquation } from '../src/operations';

// TODO: continuação na próxima aula
describe.skip('Equation (a + b) / c', () => {
  it('should return 3 when a = 4, b = 2, c = 2', () => {
    const total = operations.computeEquation(4, 2, 2);

    expect(total).toBe(3);
  });

  //   it('should return 4 when sum brings 8, c = 2', () => {
  //     jest.spyOn(operations, 'sum').mockReturnValueOnce(8);

  //     const total = computeEquation(4, 2, 2);
  //     expect(total).toBe(3);
  //   });
});
