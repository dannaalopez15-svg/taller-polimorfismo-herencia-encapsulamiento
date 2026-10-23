class Vehiculo {
    #identificador;
    #capacidad;
    #estado;

    constructor(identificador, capacidad) {
        this.#identificador = identificador;
        this.#capacidad = capacidad;
        this.#estado = "Disponible";
    }

    get identificador() {
        return this.#identificador;
    }

    get capacidad() {
        return this.#capacidad;
    }

    get estado() {
        return this.#estado;
    }

    ocupar() {
        this.#estado = "Ocupado";
    }

    calcularCosto(distancia) {
        return 0;
    }
}

class Automovil extends Vehiculo {
    calcularCosto(distancia) {
        return distancia * 3000;
    }
}

class Motocicleta extends Vehiculo {
    calcularCosto(distancia) {
        return distancia * 1500;
    }
}

class Bicicleta extends Vehiculo {
    calcularCosto(distancia) {
        return distancia * 500;
    }
}

class EmpresaTransporte {
    vehiculos = [];
    viajes = [];

    registrarVehiculo(vehiculo) {
        this.vehiculos.push(vehiculo);
    }

    registrarViaje(vehiculo, distancia) {
        if(distancia <= 0){
            console.log("ERROR: la distancia debe ser mayor a cero")
            return;
        }
        
        const costo = vehiculo.calcularCosto(distancia);

        const viaje = {
            identificador: vehiculo.identificador,
            distancia: distancia,
            costo: costo
        };

        this.viajes.push(viaje);
        vehiculo.ocupar();
    }

    mostrarVehiculos() {
        console.log("LISTA DE VEHÍCULOS");

        for (const vehiculo of this.vehiculos) {
            console.log(
                vehiculo.identificador,
                vehiculo.capacidad,
                vehiculo.estado
            );
        }
    }

    mostrarViajes() {
        console.log("LISTA DE VIAJES");

        for (const viaje of this.viajes) {
            console.log(
                "Vehículo:", viaje.identificador,
                "Distancia:", viaje.distancia,
                "Costo:", viaje.costo
            );
        }
    }
}


const empresa = new EmpresaTransporte();

const auto = new Automovil("A01", 4);
const moto = new Motocicleta("M01", 2);
const bicicleta = new Bicicleta("B01", 1);

empresa.registrarVehiculo(auto);
empresa.registrarVehiculo(moto);
empresa.registrarVehiculo(bicicleta);

empresa.registrarViaje(auto, -10);
empresa.registrarViaje(moto, 10);
empresa.registrarViaje(bicicleta, 10);

empresa.mostrarVehiculos();
empresa.mostrarViajes();
