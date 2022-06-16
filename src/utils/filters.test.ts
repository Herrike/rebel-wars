import { getCommissionerNameBySection } from "./filters"

describe('getCommissionerNameBySection fn', () => {
    test(`should return empty string when emppty string is passed`, () => { 
        expect(getCommissionerNameBySection('')).toBe('')
     })
     test(`should return empty string when emppty string is passed`, () => { 
        expect(getCommissionerNameBySection('', true)).toBe('')
     })
    test(`should return Princess when species section is passed`, () => { 
        expect(getCommissionerNameBySection('species')).toBe('Princess')
     })
     test(`should return Princess' when species section is passed and genitive is true`, () => { 
        expect(getCommissionerNameBySection('species', true)).toBe(`Princess'`)
     })
    test('should return Admiral when planets section is passed', () => { 
        expect(getCommissionerNameBySection('planets')).toBe('Admiral')
     })
     test(`should return Admiral's when planets section is passed and genitive is true`, () => { 
        expect(getCommissionerNameBySection('planets', true)).toBe(`Admiral's`)
     })
     test(`should return Admiral's when starships section is passed`, () => { 
        expect(getCommissionerNameBySection('starships')).toBe('Admiral')
     })
     test(`should return Admiral's when starships section is passed and genitive is true`, () => { 
        expect(getCommissionerNameBySection('starships', true)).toBe(`Admiral's`)
     })
     test('should return Admiral when vehicles section is passed', () => { 
        expect(getCommissionerNameBySection('vehicles')).toBe('Admiral')
     })
     test(`should return Admiral's when vehicles section is passed and genitive is true`, () => { 
        expect(getCommissionerNameBySection('vehicles', true)).toBe(`Admiral's`)
     })
 })