//UNIT TEST FOR NUMBERS

const multiply = require('../modules/multiply');

let a = Math.floor(Math.random() * 11);
let b = Math.floor(Math.random() * 11);

describe('Test Multiplication Scenarios', () =>{
    test('the function to multiply two numbers should always work', () =>{
        expect(multiply(a,b)).not.toBeUndefined();
    })

    test('the product of 3 * 2 should equal 6', () =>{
        //testing the function with hardcoded values
        expect(multiply(3,2)).toEqual(6);
    })

    test('the product of two numbers is always numeric', () =>{
        //values generated will never NOT be numeric
        expect(a).not.toBeNaN();
        expect(b).not.toBeNaN();
        expect(multiply(a,b)).not.toBeNaN();
    })

    test('the product of two numbers is always visible', () =>{
        //a and b are randomly generated and should always be present
        expect(a).not.toBeNull();
        expect(b).not.toBeNull();
        expect(multiply(a,b)).not.toBeNull();
    })

})