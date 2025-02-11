import { Cat } from "./app/models/Cat.js";

//Clase POO 1
const gato1 = new Cat("Garfield", "Masculino", 5, 15, "Orange", "Marmol");
const gato2 = new Cat("Meowth", "Masculino", 5, 15, "Crema","Manchado");

console.log(gato1.run("Camita"));
console.log(gato2.sleep(20));


