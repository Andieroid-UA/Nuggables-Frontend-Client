import { Form } from './form';

describe('Form', () => {
  it('should create an instance', () => {
    const formData = {
      id: 1,
      name: 'Form Name'
    };
    const form = new Form(formData);
    expect(form).toBeTruthy();
  });

  it('should set default values if data is not provided', () => {
    const form = new Form({});
    expect(form.id).toBe(0);
    expect(form.name).toBe('');
  });

  it('should use provided data', () => {
    const formData = {
      id: 1,
      name: 'Form Name'
    };
    const form = new Form(formData);
    expect(form.id).toBe(formData.id);
    expect(form.name).toBe(formData.name);
  });

  // Add more test cases as needed...
});
