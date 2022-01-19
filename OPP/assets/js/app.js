// Clases, molde que nos permite crear objetos


class Animal {
    // constructor es una función
    constructor(nombre, especie){
        // this hace referencia al contexto en que se está utilizando
        this.nombre = nombre;
        this.especie = especie;
    }

    // getters y setters
    // solo tienen este proposito leer o modificar el atributo
     get getNombre(){
         return this.nombre;
    }

     set setNombre(nombre){
         this.nombre = nombre;
     }
     
     get getEspecie(){
         return this.especie
     }

     set setEspecie(especie){
         this.especie = this.especie;
     }


    // métodos == función
    presentarse(){
        document.write(`Hola soy ${this.nombre} y me llamo ${this.especie} <br>`);
    }

    cambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
        let mensaje = `Mi nuevo nombre es ${this.nombre} y soy un ${this.especie} <br> `
        return mensaje;
    }

    // Métodos estáticos
    // Pertenece solo a la clase y no se hereda a los objetos
    static saludar(){
        return console.log('Hola, soy un método estatico');
    }

}


Animal.saludar;


const Animal1 = new Animal("Scooby", "Perro"); //Creamos un objeto
console.log(Animal1);

const Animal2 = new Animal("Pecas", "Gato");
console.log(Animal2);

const Animal3 = new Animal();
console.log(Animal3);

Animal1.presentarse();
Animal2.presentarse();
Animal3.presentarse();

document.write(Animal1.cambiarNombre("Oddie")); //metodo para cambiar el valor

// Getters y setters
//get = obtener el valor de una variable
//set =  fijar o cambiar el valor de un atributo o variables que van a describir a nuestro objeto 

console.log(Animal1.getNombre);
Animal1.setNombre = "Manchas";
console.log(Animal1.getNombre);
console.log(Animal1.getEspecie);



/* */










