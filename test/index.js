import { assert } from 'chai';
import Starter from '../src/index';

describe('Instagram', () => {
  it('should be a class', () => {
    const starter = new Starter();
    assert.ok(starter instanceof Starter);
  });

  it('should have starter', () => {
    const starter = new Starter('Hello');
    assert.equal(starter.starter, 'Hello');
  });
});
