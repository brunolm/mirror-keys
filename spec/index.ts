import { assert } from 'chai';
import mirrorKeys from '../src/index';

describe('mirrorKeys', () => {
  it('should mirror simple objects', () => {
    const actual = mirrorKeys(undefined, { a: undefined });
    const expected = { a: 'a' };

    assert.deepEqual(actual, expected);
  });

  it('should mirror simple objects with preffix', () => {
    const actual = mirrorKeys('Home.', { a: undefined });
    const expected = { a: 'Home.a' };

    assert.deepEqual(actual, expected);
  });

  it('should mirror nested objects', () => {
    const actual = mirrorKeys(undefined, { a: { b: undefined } });
    const expected = { a: { b: 'b' } };

    assert.deepEqual(actual, expected);
  });

  it('should mirror nested objects with preffix', () => {
    const actual = mirrorKeys('Home.', { a: { b: undefined } });
    const expected = { a: { b: 'Home.b' } };

    assert.deepEqual(actual, expected);
  });
});
