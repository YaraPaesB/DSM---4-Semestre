import operations from '../src/operations';

describe('Division', () => {
  it('should return 4 if a equals 8 and b equals 2', () => {
    // jest.spyOn(operations, 'div').mockReturnValueOnce(8);
    const total = operations.div(8, 2);
    const total2 = operations.div(7, 3);
    // // const total2 = operations.computeEquation(8, 2, 2);
    // expect(total).toEqual(4);
    // expect(divSpy).toHaveBeenCalledWith(8, 2);
    // expect(divSpy).toHaveBeenCalledWith(7, 3);
    // expect(divSpy).toHaveBeenCalledWith(1, 7, 3);
  });
});
