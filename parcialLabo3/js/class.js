

export default class Anuncio {
    constructor(id, titulo,transaccion,descripcion,precio) {
      this._id = id;
      this._titulo = titulo;
      this._transaccion = transaccion;
      this._descripcion = descripcion;
      this._precio = precio;
      
    }
    agregar() {
        console.log(`hola ${this._id}`);
    }
    eleminar() {
      console.log("eliminar");
    }
    modifcar() {
      console.log("modificar");
    }
    buscar() {
      console.log("buscar");
    }
}


export let a =9;