import { v4 as uuidv4 } from 'uuid';

export abstract class BaseClass{
	protected _id: string;

  public getId(): string {
    return this._id;
  }
  
	constructor() {
		this._id = uuidv4();
	}

}