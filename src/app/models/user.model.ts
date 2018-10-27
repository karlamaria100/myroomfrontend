import * as uuid from 'uuid';

export class User {
  public id: string;
  public name: string;

  constructor(public userName?: string) {
    this.id = uuid();
    this.name = userName;
  }


}
