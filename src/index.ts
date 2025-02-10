import { Cat } from "./app/models/catClass.js";

// name:string, gender:string,age:number, weight:number, color:string)


const gato1 = new Cat("Garfield", "Masculino", 5, 15, "Orange");
const gato2 = new Cat("Meowth", "Masculino", 5, 15, "Blanco");


console.log(gato1.run("Camita"));
console.log(gato2.sleep(20));
