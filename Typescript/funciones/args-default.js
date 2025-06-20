"use strict";
(() => {
    const fullName = (fistName, lastName, upper = false) => {
        if (upper) {
            return `${fistName} ${lastName || ''}`.toUpperCase();
        }
        else {
            return `${fistName} ${lastName || ''}`;
        }
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
