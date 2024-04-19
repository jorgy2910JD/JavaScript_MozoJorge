class persona {
    constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country= conutry;
    }


    showDetails() { 
     console.log (`Nombre: ${this.name}, Edad: ${this.age}, País: ${this.country}  `)
    }

}

const persona1 = new persona ('Jorge', 17, 'Colombia');
const persona2 = new persona ('Joao', 23,'Brasil');

persona1.showDetails();
persona2.showDetails();

