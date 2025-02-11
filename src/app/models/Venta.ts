import { Producto } from "./Producto";

/**
 * Esta clase está encargada de gestionar las ventas dentro del sistema.
 */
export class Venta{

    private _id: number;
    private _productos: Producto[];
    private _venta_total: number;
    private _fecha: Date;

    
    constructor(id:number, productos:Producto[], fecha:Date, venta_total?:number,){
        this._id = id;
        this._productos = productos;
        this._venta_total = venta_total ?? 0;
        this._fecha = fecha;
        this.calcularVentaTotal();
    }

    calcularVentaTotal(){
        this._venta_total = this._productos.reduce((sum, producto) => sum + producto.precio, 0);
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get productos(): Producto[] {
        return this._productos;
    }
    public set productos(value: Producto[]) {
        this._productos = value;
    }
    public get venta_total(): number {
        return this._venta_total;
    }
    public set venta_total(value: number) {
        this._venta_total = value;
    }
    public get fecha(): Date {
        return this._fecha;
    }
    public set fecha(value: Date) {
        this._fecha = value;
    }
}