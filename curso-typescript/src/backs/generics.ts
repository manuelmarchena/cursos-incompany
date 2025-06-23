// import {Hero as SuperHero} from "./classes/Hero";
//import * as HeroClasses from "./classes/Hero";
//import powers, { Power } from "./classes/data/powers";


//const Hero = 123

// console.log('Hola Manuel!');

//const iroman = new HeroClasses.Hero('Ironman', 1, 55);

//console.log(iroman);

//console.log(powers);

//console.log(iroman.powerMethod)

//import {genericArrowFunction, genericFunction, printObject} from "./generics/generics";
//import {Hero} from "./interfaces/Hero";
//import {Villian} from "./interfaces/Villian";

// printObject( 123 )
// printObject( new Date() );
// printObject( {a:1, b:2, c:3} )
// printObject( [1,2,3,4,5,6,7,8,9,10] )
// printObject( 'Hola Manuel' );


// console.log( genericFunction(3.141615).toFixed(2) )
// console.log( genericFunction('Hola mundo').toUpperCase() )
// console.log( genericArrowFunction(new Date).getDate() )
import { Villian, Hero } from "../interfaces/index";
import {genericArrowFunction} from "../generics/generics";

const deadpool = {
    name: 'Deadpool',
    realname: 'wade Wiston Wilson',
    dangerLevel: 130
}

console.log( genericArrowFunction<Hero>(deadpool).realname );
console.log( genericArrowFunction<Villian>(deadpool).dangerLevel);
