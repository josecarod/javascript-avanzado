/* Crear una clase carro, el carro va a tener los atributos: marca, color, modelo, velocidad y NumeroPuertas.
Debe tener los métodos: acelerar(), frenar(), reversa().

Debe tener un método llamado toString() que muestre los datos del auto y la velocidad actual.

Cáda vez que se use el método acelerar, se aumentará uno en velocidad, cada vez que se use el método reversa se restará 1.
(la velocidad puede ser negativa). Al usar el método frenar, se fijará la velocidad en 0. */


class Carro{
    constructor(marca, color, modelo, velocidad, numeroDePuertas){
        this.marca = marca;
        this.color = color;
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.numeroDePuertas = numeroDePuertas;
    }


    acelerar(){
        this.velocidad += 1;
    }

    frenar(){
        this.velocidad = 0;
    }

    reversa(){
        this.velocidad -= 1;
    }

    toString(){
        return document.write(
            `El ${this.modelo} ${this.color} de ${this.numeroDePuertas} puertas ${this.marca}
            está viajando a una velocidad de ${this.velocidad} km/hr <br>`
        );
        
    }
}

const Tsuru = new Carro ("Nissan", "rojo", "Tsuru", 0, 4);


Tsuru.toString();
Tsuru.acelerar();
Tsuru.toString();
Tsuru.acelerar();
Tsuru.toString();
Tsuru.reversa();
Tsuru.toString();
Tsuru.frenar();
Tsuru.toString();