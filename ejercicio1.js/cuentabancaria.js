class CuentaBancaria {
    #numero;
    #titular;
    #saldo;

    constructor(numero, titular, saldo) {
        this.#numero = numero;
        this.#titular = titular;
        this.#saldo = saldo;
    }

    consultarSaldo() {
        return this.#saldo;
    }

    consignar(valor) {
        this.#saldo += valor;
    }

    retirar(valor) {
        this.#saldo -= valor;
    }

    get titular() {
        return this.#titular;
    }
}

class CuentaAhorros extends CuentaBancaria {
    retirar(valor) {
        this.consignar(-valor);
        console.log("Retiro de cuenta de ahorros");
    }
}

class CuentaCorriente extends CuentaBancaria {
    retirar(valor) {
        this.consignar(-valor);
        console.log("Retiro de cuenta corriente");
    }
}

let cuentas = [
    new CuentaAhorros("101", "Ana", 500000),
    new CuentaCorriente("102", "Luis", 800000)
];

cuentas[0].consignar(100000);
cuentas[1].retirar(200000);

cuentas.forEach(cuenta =>
    console.log(cuenta.titular, cuenta.consultarSaldo())
);
