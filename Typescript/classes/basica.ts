(()=>{

    class Avenger {

//        private name: string;
//        private team: string;
//        public realName: string;
        static avgAge: number = 35;
        static getAvgAge() {
            return this.name
        }

        constructor(
            private name: string,
            private team: string,
            public realName: string = 'No name'
        ){}
    }

    const antman: Avenger = new Avenger('Antman', 'Captain')

//    console.log(antman);
//    console.log(Array.name);
})()