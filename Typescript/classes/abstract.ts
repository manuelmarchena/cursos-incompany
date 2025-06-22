(()=>{

    abstract class Mutant{
        constructor(
            public name: string,
            public realName: string,
        ){}
    }

    class Xmen extends Mutant{

        salvarMundo(){

            return 'Mundo a salvo'
        }
    }

    class Villian extends Mutant{
        consquitarMundo() {
            return 'Dominar mundo'

        }
    }
    const wolverine = new Xmen ('Wolverine', 'Logan')
    const magneto = new Villian('Magneto','Magnus')

    const printName = (character: Mutant) =>{
        console.log(character.realName)
    }

    // printName(magneto)
})()