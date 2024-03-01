export class Aroma {
  id: number;
  name: string;

  constructor(aroma:any){
    this.id = aroma.id || 0;
    this.name = aroma.name || "";
  }

  }
