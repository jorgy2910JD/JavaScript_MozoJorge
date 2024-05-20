class A {
    constructor(argumento) {
      this.argumento = argumento;
      console.log(`Constructor de A con argumento: ${argumento}`);
    }
  }
  
  class B extends A {
    constructor(argumento) {
      super(argumento);
      console.log(`Constructor de B con argumento: ${argumento}`);
    }
  }
  
  class C extends B {
    constructor(argumento) {
      super(argumento);
      console.log(`Constructor de C con argumento: ${argumento}`);
    }
  }
  
  // Crear una instancia de la clase C
  const instanciaC = new C("La mala pa bigotes");
  
  