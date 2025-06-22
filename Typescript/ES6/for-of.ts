(()=>{

    type Avenger = {
        nombre: string;
        weapon: string;
    }

    const ironman: Avenger = {
        nombre: 'IronMan',
        weapon: 'Armor Suit'
    }

    const captainAmerica: Avenger = {
        nombre: 'Capitán América',
        weapon: 'Shield'
    }

    const thor: Avenger = {
        nombre: 'Thor',
        weapon: 'Hammer'
    }

    const avengers :Avenger[] = [ ironman, thor, captainAmerica ];

    for(const avenger of avengers) {
        console.log(avenger);
    }

})()