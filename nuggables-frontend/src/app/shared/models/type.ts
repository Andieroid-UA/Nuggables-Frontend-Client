export class Type {
  id: number;
  name: string;

  constructor(type:any){
    this.id = type.id || 0;
    this.name = type.name || "";
  }

  }

