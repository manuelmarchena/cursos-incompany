define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.genericArrowFunction = exports.printObject = void 0;
    exports.genericFunction = genericFunction;
    const printObject = (argument) => {
        console.log(argument);
    };
    exports.printObject = printObject;
    function genericFunction(argument) {
        return argument;
    }
    const genericArrowFunction = (argument) => {
        return argument;
    };
    exports.genericArrowFunction = genericArrowFunction;
});
