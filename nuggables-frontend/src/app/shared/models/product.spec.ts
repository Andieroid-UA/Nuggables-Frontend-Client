import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    const productData = {
      id: 1,
      name: 'Product Name',
      description: 'Product Description',
      thc: 0.1,
      cbd: 0.2,
      type: 'Product Type',
      form: 'Product Form'
    };
    const product = new Product(productData);
    expect(product).toBeTruthy();
  });

  it('should set default values if data is not provided', () => {
    const product = new Product({});
    expect(product.id).toBe(0);
    expect(product.name).toBe('');
    expect(product.description).toBe('');
    expect(product.thc).toBe(0);
    expect(product.cbd).toBe(0);
    expect(product.type).toBe('');
    expect(product.form).toBe('');
  });

  it('should use provided data', () => {
    const productData = {
      id: 1,
      name: 'Product Name',
      description: 'Product Description',
      thc: 0.1,
      cbd: 0.2,
      type: 'Product Type',
      form: 'Product Form'
    };
    const product = new Product(productData);
    expect(product.id).toBe(productData.id);
    expect(product.name).toBe(productData.name);
    expect(product.description).toBe(productData.description);
    expect(product.thc).toBe(productData.thc);
    expect(product.cbd).toBe(productData.cbd);
    expect(product.type).toBe(productData.type);
    expect(product.form).toBe(productData.form);
  });

  // Add more test cases as needed...
});
