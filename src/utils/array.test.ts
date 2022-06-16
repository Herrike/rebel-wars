import { arrayFromNumber, isEmptyArray } from "./array"

describe('arrayFromNumber fn', () => { 
    test('should return an array of 10 chuncks when size 10 is passed', () => {
        const array = arrayFromNumber(10)
        expect(array.length).toBe(10)
     })
     test('should return an array of 0 chuncks when size 0 is passed', () => {
        const array = arrayFromNumber(0)
        expect(array.length).toBe(0)
     })
 })

 describe('isEmptyArray fn', () => { 
    test('should return true when an empty array is passed', () => {
        const array: unknown = []
        expect(isEmptyArray(array)).toBeTruthy()
     })
     test('should return false when an non-empty array is passed', () => {
        const array: unknown = [ 0, 1, 2 ]
        expect(isEmptyArray(array)).toBeFalsy()
     })
 })