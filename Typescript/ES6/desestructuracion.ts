(()=>{

    type Avengers= {
        nick: String; 
        ironman: String;
        vision: String;
        activos: Boolean;
        poder: Number;
    }

    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activos: true,
        poder: 1500.123424
    }

    // const { poder, vision } = avengers;

    // console.log( poder.toFixed(2), vision.toUpperCase() );

    const printAvenger  = ( { vision, ...resto }: Avengers )=>  {

        console.log(vision, resto);

    }

    printAvenger(avengers);

    const avengersArr: string[] = ['Cap. America', 'Ironman', 'Hulk'];

    const [ , ironman, ] = avengersArr;
    console.log(ironman);
    const [ , a, ] = avengersArr;
    console.log({ a });
    const [ b , ] = avengersArr;
    console.log({ b });
    const [ , , c] = avengersArr;
    console.log({ c });

    const avArr: [string, boolean, number] = ['Cap. América', true, 15.15];

    const [ capitan, iron, seriaUnNumero ] = avArr;

    console.log({ iron, capitan });
})()