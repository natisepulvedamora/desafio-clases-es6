//Se crea y exporta la clase Impuestos
export default class Impuestos {
    constructor(monto_bruto_anual, deducciones) {
    //método constructor, recibe el monto bruto y las deducciones
    this._monto_bruto_anual = monto_bruto_anual;
    this._deducciones = deducciones
    } 

    //Creaciones de los métodos set y get del monto bruto anual
    get monto_bruto_anual(){
        return this._monto_bruto_anual;
    }

    set monto_bruto_anual(nuevo_monto_bruto_anual){
        this._monto_bruto_anual=nuevo_monto_bruto_anual;
    }
    //Creaciones de los métodos set y get de las deducciones
    get deducciones(){
        return this._deducciones;
    }

    set deducciones(nuevas_deducciones){
        this._deducciones=nuevas_deducciones;
    }
    
    }
