import { Benefit } from './benefit';

describe('Benefit', () => {
  it('should create an instance', () => {
    const benefitData = {
      id: 1,
      name: 'Benefit Name'
    };
    const benefit = new Benefit(benefitData);
    expect(benefit).toBeTruthy();
  });

  it('should set default values if data is not provided', () => {
    const benefit = new Benefit({});
    expect(benefit.id).toBe(0);
    expect(benefit.name).toBe('');
  });

  it('should use provided data', () => {
    const benefitData = {
      id: 1,
      name: 'Benefit Name'
    };
    const benefit = new Benefit(benefitData);
    expect(benefit.id).toBe(benefitData.id);
    expect(benefit.name).toBe(benefitData.name);
  });

  // Add more test cases as needed...
});
