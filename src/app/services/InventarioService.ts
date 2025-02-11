/**
 * Clase encargada de gestionar los productos
 */
import { IGestionService } from "../interfaces/IGestionService";
import { Producto } from "../models/Producto";

export class InventarioService <T extends Producto> implements IGestionService<T>{

    private productos:T[] = [];
    
    agregar(producto: T ):void{
      this.productos.push(producto);      
    }
    agregarProductos(productos: T[] ):void{
        this.productos = [...productos]      
      }
    consultar(): T[] {
      console.log(`Lista de elementos: ${JSON.stringify(this.productos)}`);
      return this.productos;
    }
    consultarNombres(): string[] {
      return this.productos.map((item)=> item.nombre)
    }
    consultarPorId(id: number): T | undefined{
      return this.productos.find((item) => item.id === id);
    }
    consultarCantidad(): number {
        return this.productos.length;
    }
    restarProducto(producto:T): T[]{
        const index = this.productos.findIndex((item) => item.id === producto.id );
        this.productos = this.productos.slice(0, index).concat(this.productos.slice(index + 1));
        return this.productos;
    }
    
  }