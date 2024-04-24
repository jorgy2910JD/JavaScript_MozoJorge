//Definir la clase rectangulo
class rectangulo {
    constructor(ancho, altura) {
        this.ancho= ancho;
        this.altura= altura;
    }
//Método para calcular el area y perimetro
    Area() {
        return this.ancho * this.altura;
    }
    Perimetro() {
        return (this.ancho + this.altura) * 2 ;

    }

}
//Istancia para el clase rectangulo 
let Nuevorectangulo = rectangulo(14, 7);

//Calculo del área y perímetro del rectangulo
let area = Nuevorectangulo.Area();
let perimetro = Nuevorectangulo.Perimetro();

//Resultado mostrado en la consola 
console.log ("El Area del rectangulo pedido es:" + area);
console.log ("El Perimetro del rectangulo pedido es:" + perimetro);





