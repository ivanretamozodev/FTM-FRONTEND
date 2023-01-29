import { MaxCharactersPipe } from './max-characters.pipe';

describe('MaxCharactersPipe', () => {
  it('create an instance', () => {
    const pipe = new MaxCharactersPipe();
    expect(pipe).toBeTruthy();
  });
});
