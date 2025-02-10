import { Animal } from "./Animal.js";

export class Cat extends Animal{

    texture:string;

    constructor(name:string, gender:string,age:number, weight:number, color:string, texture:string){
        super(name, gender, age, weight, color)
        this.texture = texture;
    }

    meow():string{
        return `MEEEEEEEEEEEEEOW`;
    }
}