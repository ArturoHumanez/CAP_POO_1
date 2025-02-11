export class Organismo {
    vivo:boolean;
    familia:string;

    constructor(vivo:boolean, familia:string){
        this.vivo = vivo;
        this.familia = familia;
    }

    set setVivo(_vivo:boolean){
        this.vivo = _vivo;
    }

    get  getViv():boolean{
        return this.getViv;
    }

    set setFamilia(_familia:string){
        this.familia = _familia;
    }
    get getFamilia():string{
        return this.familia;
    }
}

export class Animal extends Organismo{
    
    nombre:string;
    color:string;

    constructor(vivo:boolean, familia:string, nombre:string, color:string){
        super(vivo, familia);
        this.nombre = nombre;
        this.color = color;
    }

    get getNombre(){
        return this.nombre;
    }

    set setNombre(_nombre:string){
        this.nombre = _nombre;
    }

}

export class Planta extends Organismo {
   
    color:string;
    floracion:string;

    constructor(vivo:boolean, familia:string, color:string, floracion:string){
        super(vivo,familia);
        this.color = color;
        this.floracion = floracion;
    }

    get getColor():string{
        return this.color;
    }

    set setColor(_color:string){
        this.color = _color;
    }
}

export class Perro extends Animal{
    raza:string;

    constructor(
        vivo:boolean,
        familia:string,
        nombre:string,
        color:string,
        raza:string
    ){
        super(vivo, familia, nombre, color);
        this.raza = raza
    }
}

export class Gato extends Animal{
    araña:boolean;
    constructor(
        vivo:boolean,
        familia:string,
        nombre:string,
        color:string,
        araña:boolean
    ){
        super(vivo, familia, nombre, color);
        this.araña = araña
    }


    set setAraña(_araña:boolean){
        this.araña = _araña;
    }
    get getAraña():boolean{
        return this.araña;
    }
}

export interface IAnimal{
    hacerSonido():void;
}

export class ClassLion implements IAnimal{
    hacerSonido(): void {
        console.log("ROARRRRRRRRRRr");
    }
}
export class ClassDog implements IAnimal{
    hacerSonido(): void {
        console.log("WUA WUA");
    }
}
export class ClassCat implements IAnimal{
    hacerSonido(): void {
        console.log("MIAU");
    }
}

export function hacerSonidoAnimales(animales:IAnimal[]){
    animales.forEach((animal) => {
        animal.hacerSonido()
    })
}

let gato = new ClassCat();
let perro = new ClassDog();
let leon = new ClassLion();

let animales = [gato, perro, leon];

hacerSonidoAnimales(animales);

