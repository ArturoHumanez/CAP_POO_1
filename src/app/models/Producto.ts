/**
 * Esta clase está encargada de generar los productos dentro del inventario.
 */
export class Producto{

    private _id: number;
    private _precio: number;
    private _categoria: string;
    private _tamaño: number;
    private _provedor: string;
    private _nombre: string;
    
    constructor(id:number, precio:number, categoria:string, tamaño:number, provedor:string, nombre:string){
        this._id = id;
        this._precio = precio;
        this._categoria = categoria;
        this._tamaño = tamaño;
        this._provedor = provedor;
        this._nombre = nombre;
    }

    public get precio(): number {
        return this._precio;
    }
    public set precio(value: number) {
        this._precio = value;
    }
    public get categotia(): string {
        return this._categoria;
    }
    public set categotia(value: string) {
        this._categoria = value;
    }
    public get tamaño(): number {
        return this._tamaño;
    }
    public set tamaño(value: number) {
        this._tamaño = value;
    }
    public get provedor(): string {
        return this._provedor;
    }
    public set provedor(value: string) {
        this._provedor = value;
    }
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
}