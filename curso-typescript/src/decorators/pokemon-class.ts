function printToConsole( constructor: Function ) {
    console.log( constructor );
}

const printToConsoleConditional =(print: boolean = false):Function =>{
    if (print) {
        return printToConsole;
    } else{
        return ()=> {}
    }
}

const blockPrototype = function ( constructor: Function ) {
    Object.seal( constructor )
    Object.seal( constructor.prototype )
}

function CheckValidPokemonId(){
    return function ( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
        const orginalMethod = descriptor.value;
        //descriptor.value = ()=> console.log('Hola mundo')
        descriptor.value = (id: number)=> {
            if( id< 1 || id> 800 ){
                return console.log("el id del pokemon supera el intervalo esperado")
            }
        }
    }
}

function readOnly( isWritable: boolean = true): Function {
    return function ( target : any, propertyKey: string ) {

        const descriptor: PropertyDescriptor = {
            get(){
                console.log(this, 'getter')
                return 'Manuel'
            },
            set(this, val){
                //console.log(this, val)
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                });
            }
        };
        return descriptor;
    }
}

// @printToConsole
@blockPrototype
@printToConsoleConditional(true)
export class Pokemon {
    @readOnly(true)
    public publicApi: string = 'https://pokeapi.com';

    constructor(
        public name: string
    ) {}
    @CheckValidPokemonId()
    savePokemonToDB( id:number ) {
        console.log(`Pokemon guardado ${ id}`)
    }
}