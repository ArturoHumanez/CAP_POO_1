export interface IGestionService<T>{
    agregar(elmento: T): void,
    consultar(): void,
    consultarNombres?(): string[],
    consultarPorId(id: number): T | undefined
    
}