// Generated by https://quicktype.io

export interface IResProducto {
    total:     number;
    productos: Producto[];
}

export interface Producto {
    _id:    string;
    nombre: string;
    estado: boolean;
    precio: number;
    costo:  number;
    minimo: number;
    stock:  number;
    __v:    number;
}
//la carpeta interfaces y IProducto	fue generado automaticamente