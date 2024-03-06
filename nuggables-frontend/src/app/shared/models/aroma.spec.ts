import { Aroma } from './aroma';

describe('Aroma', () => {
  it('should create an instance', () => {
    const aromaData = {
      id: 1,
      name: 'Aroma Name'
    };
    const aroma = new Aroma(aromaData);
    expect(aroma).toBeTruthy();
  });

  it('should set default values if data is not provided', () => {
    const aroma = new Aroma({});
    expect(aroma.id).toBe(0);
    expect(aroma.name).toBe('');
  });

  it('should use provided data', () => {
    const aromaData = {
      id: 1,
      name: 'Aroma Name'
    };
    const aroma = new Aroma(aromaData);
    expect(aroma.id).toBe(aromaData.id);
    expect(aroma.name).toBe(aromaData.name);
  });

  // Add more test cases as needed...
});
