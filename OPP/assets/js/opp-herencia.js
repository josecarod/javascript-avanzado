class Pokemon{
    constructor(nombre, tipo){
         this.nombre = nombre;
         this.tipo = tipo;
    }

    // métodos
    atacar(){
        return console.log(`${this.nombre} está atacando.`)
    }
}

class Pikachu extends Pokemon{
    constructor(nombre, tipo, edad){
        super(nombre, tipo);
        this.edad = edad;
    }

    // metodos
    evolucionar(){
        return console.log(`${this.nombre} está evolucionando. `)
    }

}


const Pikachu1 = new Pikachu("Juan", "Eléctrico", 3); //Pertenece a la clase Pikachu
console.log(Pikachu1);
Pikachu1.atacar();
Pikachu1.evolucionar();

const Pokemon1 = new Pokemon("Charmander", "Fuego"); //Pertenece a la clase Pokemon
Pokemon1.atacar();