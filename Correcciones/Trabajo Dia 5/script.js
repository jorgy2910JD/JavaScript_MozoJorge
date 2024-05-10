
//***EJERCICIO 3***

//definición de la clase
class Vehiculo {
    constructor(marca, modelo, año) {
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
    }

mostrarDetalles() {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`);
  }
}

//Subclase Coche que se hereda de la clase vehiculo
class Coche extends Vehiculo {
    constructor(marca, modelo, año, puertas) {
      super(marca, modelo, año);
      this.puertas = puertas;
    }

//Detalles del numero de puertas
mostrarDetalles() {
    super.mostrarDetalles();
    console.log(`Número de puertas: ${this.numPuertas}`);
  }
}

const carrito = new Coche('Toyota', 'Prado', 2022, 4);
carrito.mostrarDetalles();


//***EJERCICIO 4***

class CuentaBancaria {
    constructor(numeroCuenta, SaldoInicial) {
        this.numeroCUenta = numeroCuenta;
        this.SaldoInicial = SaldoInicial;
    }
}

function depositar(monto) {
    this.saldo += monto;
    console.log(`Se han depositado ${monto} en la cuenta ${this.numeroCuenta}. Nuevo saldo: ${this.saldo}`)

function retirar(monto) {
    if (monto <= this.saldo) {
      this.saldo -= monto;
      console.log(`Se han retirado ${monto} de la cuenta ${this.numeroCuenta}. Nuevo saldo: ${this.saldo}`);
    } else {
      console.log(`Fondos insuficientes en la cuenta ${this.numeroCuenta}.`);
    }


}
}

// Crear instancias de la clase CuentaBancaria
const cuenta1 = new CuentaBancaria('123456789', 1000);
const cuenta2 = new CuentaBancaria('987654321', 2000);

// Realizar operaciones de depósito y retiro
cuenta1.depositar(1500);
cuenta2.retirar(1700);


