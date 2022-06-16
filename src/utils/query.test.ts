import { getGravity, isNumberInRange } from "./query"

describe('getGravity', () => { 
    test('should return 1 when 1 standard str is passed', () => { 
        expect(getGravity('1 standard')).toBe(1)
     })
     test('should return 1 when 1 standard, 1 surface str is passed', () => { 
        expect(getGravity('1 standard,1.5 surface')).toBe(1.5)
     })
     test('should return unknown str when unknown str is passed', () => { 
        expect(getGravity('unknown')).toBe('unknown')
     })
     test('should return N/A str when N/A str is passed', () => { 
        expect(getGravity('N/A')).toBe('N/A')
     })
 })

 describe('isNumberInRange', () => { 
    test('should return true when value is 20, min is 10 and max is 30', () => { 
        expect(isNumberInRange(20, 10, 30)).toBeTruthy()
     })
     test('should return false when value is 40, min is 10 and max is 30', () => { 
        expect(isNumberInRange(40, 10, 30)).toBeFalsy()
     })
 })