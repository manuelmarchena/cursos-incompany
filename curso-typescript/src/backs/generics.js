// import {Hero as SuperHero} from "./classes/Hero";
//import * as HeroClasses from "./classes/Hero";
//import powers, { Power } from "./classes/data/powers";
define(["require", "exports", "../generics/generics"], function (require, exports, generics_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const deadpool = {
        name: 'Deadpool',
        realname: 'wade Wiston Wilson',
        dangerLevel: 130
    };
    console.log((0, generics_1.genericArrowFunction)(deadpool).realname);
    console.log((0, generics_1.genericArrowFunction)(deadpool).dangerLevel);
});
