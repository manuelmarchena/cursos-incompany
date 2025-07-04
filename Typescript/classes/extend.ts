(()=>{

    class Avenger {
        constructor (
            public name: string,
            public realName: string,
        ){
           // console.log('¡Constructor Avenger llamado!')
        }

        protected getFullName(){
            return `${ this.name } ${ this.realName }`
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean,
            ){
            super(name, realName);
           // console.log('¡Constructor Xmen llamado!');
        }

        getFullNameFromAvenger(): string{
            return super.getFullName();
        }

        get fullName(){
            return `${this.name} - ${ this.realName }`;
        }

        set fullName(name){
            if(  name.length< 3){
                throw new Error('El nombre debe ser mayor de 3 letras')
            }

            this.name = name;
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true)
    //console.log(wolverine);
    //console.log(wolverine.getFullNameFromAvenger());
    //console.log(wolverine.fullName);
    // wolverine.fullName = 'Ma'
    //console.log(wolverine.fullName);
})()