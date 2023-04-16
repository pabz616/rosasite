const houseForSale = require('../modules/simpleText')
const simpleText = require('../modules/simpleText')

describe('Unit tests for text', () =>{
    test('Checking the array is populated', () =>{
        expect(houseForSale).not.toBeNull()
        expect(houseForSale).toBeDefined()
    })
        
    test('Checking the array for a value & properties', () =>{
        expect(houseForSale.kitchen.amenities).not.toHaveLength(0)
        expect(houseForSale).toHaveProperty('kitchen.amenities', [
            'oven',
            'stove',
            'washer',
          ])
        
        expect(houseForSale).toHaveProperty('kitchen.area', 20)
        expect(houseForSale).not.toHaveProperty('pool')
    })

    test('Checking the array for boolean value', () =>{
        expect(houseForSale.bath).toBe(true)
        expect(houseForSale.bath).not.toBeNull()
    })

    test('Checking the array for numeric value', () =>{
        expect(houseForSale.bedrooms).toBeGreaterThan(0)
        expect(houseForSale.bedrooms).toEqual(4)
        expect(houseForSale.bedrooms).not.toBeNaN()        
    })

    test('Checking the array for approximate value', () =>{
        expect(houseForSale.kitchen.area).not.toBeNull()
        expect(houseForSale.kitchen.area).not.toBeNaN()
        expect(houseForSale.kitchen.area).toBeCloseTo(20)
    })

    test('Checking the array for text value', () =>{
        expect(houseForSale.kitchen.wallColor).not.toBeUndefined()
        expect(houseForSale.kitchen.wallColor).not.toBeNull()

        //VALUE IS EXPRESSED AS A LITERAL COLOR, NOT A VAGUE REFERENCE, HEX, OR WHATEVER
        expect(houseForSale.kitchen.wallColor).toBe('white')
        expect(houseForSale.kitchen.wallColor).not.toContain('eggshell')
        expect(houseForSale.kitchen.wallColor).not.toContain('#ffffff')
        expect(houseForSale.kitchen.wallColor).not.toContain('SW 9542')
    })

    test('Deep reference using an array containing the keypath', () =>{
        expect(houseForSale).toHaveProperty(['kitchen', 'area'], 20)
        expect(houseForSale).toHaveProperty(['kitchen', 'nice.oven'])
        expect(houseForSale).not.toHaveProperty(['kitchen', 'open'])
    })

    test('Referencing keys with dot in the key itself', () =>{
        expect(houseForSale['ceiling.height']).not.toBeNull()
        expect(houseForSale).toHaveProperty(['ceiling.height'], 2)
    })
})