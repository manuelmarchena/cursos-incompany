"use strict";
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activeBatiSignal = () => {
        return '¡Batiseñal activada!';
    };
    console.log(typeof activeBatiSignal);
    const heroName = returnName();
})();
