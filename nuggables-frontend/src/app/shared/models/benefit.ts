export class Benefit {
  id: number;
  name: string;

  constructor(benefit:any){
    this.id = benefit.id || 0;
    this.name = benefit.name || "";
  }

  }
