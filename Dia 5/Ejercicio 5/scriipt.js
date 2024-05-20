class Forma {
    calcularArea () {
        console.log ('Este método tendrá valor con las subclases')
    }
}

class Circulo extends Forma {
    constructor(radio) {
        super();
        this.radio= radio;
    }
    calcularArea() {
        const area = Math.PI * this.radio ** 2;
        console.log(`El área del circulo es: ${area}`);
    }
}

class Triangulo extends Forma {
    constructor (base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea (){
        const area =(this.base * this.altura) / 2;
        console.log(`El area del triangulo es: ${area}`)
    }
}

// se crea una nueva instancia de la clase circulo y triangulo para proceder a calcular el area
const circulo = new Circulo (5);
circulo.calcularArea();


const triangulo = new Triangulo(6,8);

triangulo.calcularArea();