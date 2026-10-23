class Producto {
    #nombre;
    #precio;

    constructor(nombre, precio) {
        this.#nombre = nombre;
        this.#precio = precio;
    }

    get nombre() {
        return this.#nombre;
    }

    calcularCosto() {
        return this.#precio;
    }
}

class ProductoFisico extends Producto {
    calcularCosto() {
        return super.calcularCosto() + 5000;
    }
}

class ProductoDigital extends Producto {
    calcularCosto() {
        return super.calcularCosto();
    }
}

let productos = [
    new ProductoFisico("Teclado", 50000),
    new ProductoDigital("Videojuego", 80000)
];

let carrito = [];

carrito.push(productos[0]);
carrito.push(productos[1]);

let total = carrito.reduce(
    (suma, producto) => suma + producto.calcularCosto(), 0
);

console.log("Productos del carrito:");
carrito.forEach(producto => console.log(producto.nombre));
console.log("Total de la compra:", total);