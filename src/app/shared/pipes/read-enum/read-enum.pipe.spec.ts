import { Level } from 'src/app/user';
import { ReadEnumPipe } from './read-enum.pipe';

describe('ReadEnumPipe', () => {
  it('create an instance', () => {
    const pipe = new ReadEnumPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(Level).join('-')).toBe("junior-middle-senior");
  });
});
