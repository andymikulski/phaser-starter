import MainScene from './MainScene';

describe('MainScene', () => {
  it('should not throw an error upon instantiation', () => {
    const attempt = () => new MainScene({});
    expect(attempt).not.toThrow();
  });
});
