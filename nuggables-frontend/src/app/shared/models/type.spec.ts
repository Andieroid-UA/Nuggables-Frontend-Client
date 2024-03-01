import { Type } from './type';

describe('Type', () => {
  it('should create an instance', () => {
    const typeData = {
      id: 1,
      name: 'Type Name'
    };
    const type = new Type(typeData);
    expect(type).toBeTruthy();
  });

  it('should set default values if data is not provided', () => {
    const type = new Type({});
    expect(type.id).toBe(0);
    expect(type.name).toBe('');
  });

  it('should use provided data', () => {
    const typeData = {
      id: 1,
      name: 'Type Name'
    };
    const type = new Type(typeData);
    expect(type.id).toBe(typeData.id);
    expect(type.name).toBe(typeData.name);
  });

  // Add more test cases as needed...
});
