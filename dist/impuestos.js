"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Se crea y exporta la clase Impuestos
var Impuestos = /*#__PURE__*/function () {
  function Impuestos(monto_bruto_anual, deducciones) {
    _classCallCheck(this, Impuestos);

    //método constructor, recibe el monto bruto y las deducciones
    this._monto_bruto_anual = monto_bruto_anual;
    this._deducciones = deducciones;
  } //Creaciones de los métodos set y get del monto bruto anual


  _createClass(Impuestos, [{
    key: "monto_bruto_anual",
    get: function get() {
      return this._monto_bruto_anual;
    },
    set: function set(nuevo_monto_bruto_anual) {
      this._monto_bruto_anual = nuevo_monto_bruto_anual;
    } //Creaciones de los métodos set y get de las deducciones

  }, {
    key: "deducciones",
    get: function get() {
      return this._deducciones;
    },
    set: function set(nuevas_deducciones) {
      this._deducciones = nuevas_deducciones;
    }
  }]);

  return Impuestos;
}();

exports["default"] = Impuestos;