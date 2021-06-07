"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Se crea y exporta la clase cliente
var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre) {
    var impuesto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Cliente);

    this._nombre = nombre;
    this._impuesto = impuesto; //Puede ser {} el impuesto ya que la cardinalidad es 0,1
  } //Métodos get para cada atributo del cliente


  _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: //Métodos set para cada atributo del cliente
    function set(nuevoNombre) {
      this._nombre = nuevoNombre;
    }
  }, {
    key: "impuesto",
    get: function get() {
      return this._impuesto;
    },
    set: function set(nuevoImpuesto) {
      this._impuesto = nuevoImpuesto;
    } //Método para calcular el impuesto del cliente

  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      //Se retorna el resulto de restar el monto bruto anual con las deducciones
      var impuesto = (this._impuesto.monto_bruto_anual - this._impuesto.deducciones) * 0.21;

      if (Number.isNaN(impuesto)) {
        return "Revise los valores de monto bruto anual y deducciones asociados, s\xF3lo se permiten n\xFAmeros";
      } else {
        return "El impuesto a pagar por ".concat(this._nombre, " corresponde a ").concat(impuesto, " pesos");
      }
    }
  }]);

  return Cliente;
}();

exports["default"] = Cliente;