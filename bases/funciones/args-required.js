"use strict";
(() => {
    const fullName = (fistName, lastName) => {
        return `${fistName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
