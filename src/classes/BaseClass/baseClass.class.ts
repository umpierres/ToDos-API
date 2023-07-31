import { randomUUID } from "crypto";

export abstract class BaseClass{
	protected _id: string;

  public getId(): string {
    return this._id;
  }
  
	constructor() {
		this._id = randomUUID();
	}

    toJSON(){}
}