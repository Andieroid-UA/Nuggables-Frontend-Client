export class Product {
  id: number;
  name: string;
  description: string;
  thc: number;
  cbd: number;
  type: string;
  form: string;

  constructor(product:any){
    this.id = product.id || 0;
    this.name = product.name || "";
    this.description = product.description || "";
    this.thc = product.thc || "";
    this.cbd = product.cbd || "";
    this.type = product.type || "";
    this.form = product.form || "";
  }

  }

