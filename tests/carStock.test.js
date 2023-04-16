//UNIT TEST FOR ARRAY

const carStock = require('../modules/fakeAPI')

describe('Test Cars API', () =>{
    test('car stock list is displayed',() =>{
        expect(carStock).not.toBeNull()
    })

    test('car stock list has no errors',() =>{
        expect(carStock).not.toBeUndefined()
    })

    test('car stock list length is 5',() =>{
        expect(carStock).toHaveLength(5)
    })
    
    test('car stock list has Ferrari',() =>{
        expect(carStock).toContain('Ferrari')
    })

})