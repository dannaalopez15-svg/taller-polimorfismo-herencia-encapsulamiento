class Empleado {
    #identificacion;
    #nombre;

    constructor(identificacion, nombre) {
        this.#identificacion = identificacion;
        this.#nombre = nombre;
    }

    calcularPago() {
        return 0;
    }

    get nombre() {
        return this.#nombre;
    }
}

class EmpleadoPlanta extends Empleado {
    #salario;

    constructor(identificacion, nombre, salario) {
        super(identificacion, nombre);
        this.#salario = salario;
    }

    calcularPago() {
        return this.#salario;
    }
}

class Contratista extends Empleado {
    #tarifa;
    #horas;

    constructor(identificacion, nombre, tarifa, horas) {
        super(identificacion, nombre);
        this.#tarifa = tarifa;
        this.#horas = horas;
    }

    calcularPago() {
        return this.#tarifa * this.#horas;
    }
}

let empleados = [
    new EmpleadoPlanta("301", "Danna", 2000000),
    new Contratista("302", "Laura", 25000, 80)
];

empleados.forEach(empleado =>
    console.log(empleado.nombre, "Pago:", empleado.calcularPago())
);