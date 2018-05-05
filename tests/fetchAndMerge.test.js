jest.mock('../src/utils/get', () => {
  return jest.fn().mockImplementation(() => {
    return { test: 'response' };
  });
});

import fetchAndMerge from '../src/functions/fetchAndMerge';

describe('fetchAndMerge', () => {
  it('combines responses into array', () => {
    fetchAndMerge('http://example.com/test', 'http://example.com/test').then(
      data => {
        expect(data).toEqual([{ test: 'response' }, { test: 'response' }]);
      },
    );
  });
  it('combines responses into object using transform', () => {
    const transform = responses => Object.assign({}, ...responses);
    fetchAndMerge(
      'http://example.com/test',
      'http://example.com/test',
      transform,
    ).then(data => {
      expect(data).toEqual({ test: 'response' });
    });
  });
});
