"use strict";
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    imprimirBio() { }
}
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    };
    let superman = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
})();
(() => {
    const client1 = {
        name: 'Barry Allen',
        age: 24,
        address: {
            id: 100,
            zip: 'YVEKE - 123',
            city: 'Viajar en el tiempo'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Manuel',
        age: 37,
        address: {
            id: 1,
            zip: 'VE 5001',
            city: 'San Cristóbal'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
})();
(() => {
    let addTwoNumbersFunction;
    addTwoNumbersFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map