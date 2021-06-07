//Archivo principal, para correr el script se debe ejecutar desde la raíz : node src/main.js
//Se ejecutó  npx babel src/ -d dist/ --config-file ./babel.config.json para traspilar el código de ES6 a ES5
//Se importan las clases Cliente e Impuestos
import Cliente from "./cliente.js";
import Impuestos from "./impuestos.js";

//Se instancia un nuevo objeto Impuestos, ingresando el monto bruto anual y deducciones
let impuesto1=new Impuestos(5000000,100000);
//Se instancia un nuevo cliente ingresando su nombre y el objeto impuesto1
let cliente1=new Cliente("José",impuesto1);
//Se accede al método creado para calcular el impuesto del cliente
console.log(cliente1.calcularImpuesto());