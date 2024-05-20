//Definicion de la clase vehiculo
class vehiculo {
    constructor(año,marca,modelo) {
        this.año = año;
        this.marca = marca;
        this.modelo = modelo;
    }

//mostrar los datos ingresados
    mostrardetalles() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año:${this.año}`);
    }   
}

//Subclase 'carro' que se hereda de la clase vehiculo para agreagar el numero de puertas
class carro extends vehiculo {
    constructor (marca,modelo,año,doorsNumber) {
        super(modelo,marca,año);
        this.doorsNumber = doorsNumber;
    }
//muestra el numero de puertas
    mostrardetalles () {
        super.mostrardetalles();
        console.log(`Número de Puertas: ${this.doorsNumber}`);
    }
}


//ejemplo de uso

const miCarrito = new carro('Mazda 3', 'Sedán', 2024, 4);

miCarrito.mostrardetalles();