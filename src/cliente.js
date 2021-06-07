//Se crea y exporta la clase cliente
export default class Cliente{
    constructor(nombre,impuesto={}){
        this._nombre=nombre;
        this._impuesto=impuesto; //Puede ser {} el impuesto ya que la cardinalidad es 0,1

    }
    //Métodos get para cada atributo del cliente
    get nombre(){
        return this._nombre;
    }

    get impuesto(){
        return this._impuesto;
    }

    //Métodos set para cada atributo del cliente
    set nombre(nuevoNombre){
        this._nombre=nuevoNombre;
    }

    set impuesto(nuevoImpuesto){
        this._impuesto=nuevoImpuesto;
    }

    //Método para calcular el impuesto del cliente
    calcularImpuesto(){
        //Se retorna el resulto de restar el monto bruto anual con las deducciones
        
        let impuesto=(this._impuesto.monto_bruto_anual - this._impuesto.deducciones)*0.21;

        if(Number.isNaN(impuesto)){
            return `Revise los valores de monto bruto anual y deducciones asociados, sólo se permiten números`;
        }
        else{
            return `El impuesto a pagar por ${this._nombre} corresponde a ${impuesto} pesos`;
        }
        
    }
}