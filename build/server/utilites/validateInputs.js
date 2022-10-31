"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This function will use to check if the input values is same as expected or not
var validateInputIsNumber = function (input) {
    var inputValue = Number(input);
    if (!isNaN(inputValue)) {
        return true;
    }
    else {
        return false;
    }
};
exports.default = validateInputIsNumber;
