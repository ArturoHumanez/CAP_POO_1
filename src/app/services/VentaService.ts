/**
 * Clase encargada de gestionar las ventas
 */
import { IGestionService } from "../interfaces/IGestionService";
import { Venta } from "../models/Venta";

export class VentaService <T extends Venta> implements IGestionService<T>{

    private ventas:T[] = [];
    
    agregar(venta: T):void{
      this.ventas.push(venta);      
    }
    consultar(): T[] {
      console.log(`Lista de ventas: ${JSON.stringify(this.ventas)}`);
      return this.ventas;
    }
    consultarPorId(id: number): T | undefined{
      return this.ventas.find((item) => item.id === id);
    }
    consultarCantidad(): number {
        return this.ventas.length;
    }
    eliminarVenta(venta:T): T[]{
        const index = this.ventas.findIndex((item) => item.id === venta.id );
        this.ventas = this.ventas.slice(0, index).concat(this.ventas.slice(index + 1));
        return this.ventas;
    }
    
  }