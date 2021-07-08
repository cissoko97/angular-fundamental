import { ReadEnumPipe } from './read-enum.pipe';

describe('ReadEnumPipe', () => {
  let pipe: ReadEnumPipe;
  beforeEach(() => {
    pipe = new ReadEnumPipe();
  });


  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('read key of Enum', () => {

    enum Level {
      junior = 'junior',
      middle = 'middle',
      senior = 'senior'
    }

    expect(pipe.transform(Level).join('-')).toBe("junior-middle-senior");
  })
});
