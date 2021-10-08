import PhysicsScene from './PhysicsScene';

describe('PhysicsScene', () => {
  it('should not throw an error upon instantiation', () => {
    const attempt = () => new PhysicsScene({});
    expect(attempt).not.toThrow();
  });
});
