export class Cat{

    name:string;
    gender:string;
    age:number;
    weight:number;
    color:string;

    constructor(name:string, gender:string,age:number, weight:number, color:string){
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.weight = weight;
        this.color = color;
    }

    breath():string{
        return `I'm brithing`;
    }

    eat(food:string):string{
        return `I'm eating ${food}`;
    }

    run(destination:string):string{
        return `I'm runnin' to ${destination}`
    }

    sleep(hours:number):string{
        return `I sleept ${hours} healthy hours`
    }

    meow():string{
        return `MEEEEEEEEEEEEEOW`;
    }
}