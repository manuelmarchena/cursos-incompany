"use strict";
const msg = 'Hola mundo';
const hero = {
    name: 'Ironman',
    age: 45
};
hero.age = 50;
console.log(msg);
console.log(hero.age + 1);
function sayHello(msg) {
    console.log(msg);
}
(() => {
    const a = 10;
    console.log(a);
})();
