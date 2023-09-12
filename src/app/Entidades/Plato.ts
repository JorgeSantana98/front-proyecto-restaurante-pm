export class Plato {
  idProducto: number;
  categoria: string;
  nombreProducto: string;
  descripcion: string;
  precio: number;

  constructor(id: number, cat: string,nom: string,des:string,pre: number) {
    this.idProducto=id;
    this.categoria=cat;
    this.nombreProducto=nom;
    this.descripcion=des;
    this.precio=pre;
  }
}
