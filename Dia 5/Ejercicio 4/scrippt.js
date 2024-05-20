class CuentaBancaria {
    constructor(NumeroCuenta, SaldoInicial) {
        this.NumeroCuenta = NumeroCuenta;
        this.saldo = SaldoInicial;
    }

    depositar(cantidad) {
        this.saldo += cantidad;
        console.log(`Se han depositado ${cantidad} de Pesos. Tu nuevo Saldo es: ${this.saldo}`);
    }

    retirar(cantidad) {
        if (cantidad > this.saldo) {
            console.log('Saldo Insuficiente mi Papacho');
        } else {
            this.saldo -= cantidad;
            console.log(`Se han retirado ${cantidad} de Pesos. Tu saldo nuevo es: ${this.saldo}`);
        }
    }
}

// Creación de cuentas bancarias para deposito y retiro
let cuenta1 = new CuentaBancaria("132547698", 1500000);
let cuenta2 = new CuentaBancaria("2143658709", 2700000);

// Realizar depósitos y retiros
cuenta1.depositar(2000000);
cuenta2.depositar(15000000);

cuenta1.retirar(150000);
