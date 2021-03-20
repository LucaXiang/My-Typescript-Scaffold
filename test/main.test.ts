import { sum } from '../src/libs/sum';

describe('main', () => {
  it('1+1', function () {
    return expect(sum(1, 1)).toBe(2);
  });
});
