import operations from '../src/operations';

describe('Sum', () => {
  test('operations.sum(2,3) should return 5', () => {
    const total = operations.sum(2, 3);

    expect(total).toEqual(5);
  });

  test('operations.sumPositives(-2,3) should throw Error', () => {
    let hasError: boolean = false;
    try {
      const _total = operations.sumPositives(-2, 3);
    } catch (error: any) {
      hasError = true;
    }
    expect(hasError).toBeTruthy();
  });

  test('operations.sumPositives(14,13) should return 27', () => {
    const total = operations.sumPositives(14, 13);

    expect(total).toEqual(27);
  });
});
