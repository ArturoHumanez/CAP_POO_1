import { Cat } from "./app/models/Cat.js";
import { Producto } from "./app/models/Producto.js";
import { Venta } from "./app/models/Venta.js";
import { InventarioService } from "./app/services/InventarioService.js";
import { VentaService } from "./app/services/VentaService.js";

//Clase POO 1
const gato1 = new Cat("Garfield", "Masculino", 5, 15, "Orange", "Marmol");
const gato2 = new Cat("Meowth", "Masculino", 5, 15, "Crema","Manchado");

console.log(gato1.run("Camita"));
console.log(gato2.sleep(20));

//Evaluación
const producto1 = new Producto(1, 100, "Lápices", 20, "BIC", "Lápiz 2B");
const producto2 = new Producto(2, 600, "Papel", 40, "Dunder Miffling", "Papel Blanco");
const producto3 = new Producto(3, 4300, "Cuadernos", 20, "Norma", "Cuaderno Estampado");
const producto4 = new Producto(4, 800, "Mochila", 50, "Switerland", "Mochilota");

const inventarioService = new InventarioService();
inventarioService.agregar(producto1);
inventarioService.agregar(producto2);
inventarioService.agregar(producto3);
inventarioService.agregar(producto4);

let inventario = inventarioService.consultar();
inventario = inventarioService.restarProducto(producto3);
inventario = inventarioService.consultar();

const ventaService = new VentaService();
const venta1 = new Venta(1, [inventario[0], inventario[1]], new Date());

ventaService.agregar(venta1);
ventaService.consultar();
ventaService.eliminarVenta(venta1);
ventaService.consultar();
