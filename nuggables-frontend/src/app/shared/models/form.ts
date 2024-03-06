export class Form {
  id: number;
  name: string;

  constructor(form:any){
    this.id = form.id || 0;
    this.name = form.name || "";
  }

  }

