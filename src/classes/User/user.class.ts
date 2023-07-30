import { BaseClass } from "../BaseClass/baseClass.class";

export class User extends BaseClass{

    constructor(private email:string, private password:string){
        super()
    }

    toJSON() {
        return {
            id: this.id,
            email:this.email,
            password:this.password,
        };
    }

}