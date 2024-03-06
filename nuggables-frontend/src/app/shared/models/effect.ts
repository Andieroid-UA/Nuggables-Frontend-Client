export class Effect {
  id: number;
  name: string;

  constructor(effect:any){
    this.id = effect.id || 0;
    this.name = effect.name || "";
  }

  }
