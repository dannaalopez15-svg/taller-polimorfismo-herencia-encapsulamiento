class Profesional {
    #identificacion;
    #nombre;
    #disponibilidad;

    constructor(identificacion, nombre, disponibilidad) {
        this.#identificacion = identificacion;
        this.#nombre = nombre;
        this.#disponibilidad = disponibilidad;
    }

    duracionConsulta() {
        return 20;
    }

    get nombre() {
        return this.#nombre;
    }
}

class MedicoGeneral extends Profesional {
    duracionConsulta() {
        return 20;
    }
}

class Especialista extends Profesional {
    duracionConsulta() {
        return 40;
    }
}

let profesionales = [
    new MedicoGeneral("201", "Danna", "Disponible"),
    new Especialista("202", "Brayan", "Disponible")
];

profesionales.forEach(profesional =>
    console.log(
        profesional.nombre,
        "Duración:",
        profesional.duracionConsulta(),
        "minutos"
    )
);