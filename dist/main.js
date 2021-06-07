"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Archivo principal, para correr el script se debe ejecutar desde la raíz : node src/main.js
//Se ejecutó npx babel src/ -d dist/ para traspilar el código de ES6 a ES5
//Se importan las clases Cliente e Impuestos
//Se instancia un nuevo objeto Impuestos, ingresando el monto bruto anual y deducciones
var impuesto1 = new _impuestos["default"](5000000, 100000); //Se instancia un nuevo cliente ingresando su nombre y el objeto impuesto1

var cliente1 = new _cliente["default"]("José", impuesto1); //Se accede al método creado para calcular el impuesto del cliente

console.log(cliente1.calcularImpuesto());