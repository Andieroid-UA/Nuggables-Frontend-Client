import { Effect } from './effect';

describe('Effect', () => {
  it('should create an instance', () => {
    const effectData = {
      id: 1,
      name: 'Effect Name'
    };
    const effect = new Effect(effectData);
    expect(effect).toBeTruthy();
  });

  it('should set default values if data is not provided', () => {
    const effect = new Effect({});
    expect(effect.id).toBe(0);
    expect(effect.name).toBe('');
  });

  it('should use provided data', () => {
    const effectData = {
      id: 1,
      name: 'Effect Name'
    };
    const effect = new Effect(effectData);
    expect(effect.id).toBe(effectData.id);
    expect(effect.name).toBe(effectData.name);
  });

  // Add more test cases as needed...
});
