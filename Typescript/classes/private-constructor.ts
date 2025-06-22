(()=>{

    class Apocalipsis {

        static instance: Apocalipsis

        private constructor(
            public name: string
        ) {}

        static callApocalipsis() :Apocalipsis {
            if ( !Apocalipsis.instance ) {
                Apocalipsis.instance = new Apocalipsis( 'Soy Apocalipsis el destructor')
            }

            return Apocalipsis.instance;
        }
    }

    const apocalipsis = Apocalipsis.callApocalipsis();
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();

    // console.log(apocalipsis, 1,  apocalipsis1, 2, apocalipsis2, 3, apocalipsis3);
})()