/**
 * Interfaz encargada de establecer el ocntrato de funciones que deberán tener los servicios de gestión
 */
export interface IGestionService<T>{
    agregar(elmento: T): void,
    consultar(): void,
    consultarNombres?(): string[],
    consultarPorId(id: number): T | undefined
    
}