(()=> {

    interface Hero {

        name: string;
        age?: number;
        powers: string[];
        getName?: ()=> string;

    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    }

    let superman: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo'],
        getName() {
            return this.name
        }
    }

})()