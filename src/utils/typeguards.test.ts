import { isGenericCollection, isGenericObject, isGenericObjectWithKey, isGenericResponseData, isPlanet, isPlanetsCollection, isSpecie, isSpeciesCollection } from "./typeguards"

describe('isGenericObject', () => { 
   test('should isGenericObject return true when a generic object is passed',()=> {
    const obj = {}
    expect(isGenericObject(obj)).toBeTruthy()
   }) 
   test('should isGenericObject return false when a non-object is passed',()=> {
    const obj = null
    expect(isGenericObject(obj)).toBeFalsy()
   }) 
 })

 describe('isGenericObjectWithKey', () => { 
    test('should isGenericObjectWithKey return true when a generic obj and its existing key are passed',()=> {
     const obj = {
        key: 'value'
     }
     expect(isGenericObjectWithKey(obj, 'key')).toBeTruthy()
    }) 
    test('should isGenericObjectWithKeyWithKey return false when a generic obj and its existing key are passed',()=> {
        const obj = {
            name: 'value'
         }
     expect(isGenericObjectWithKey(obj, 'key')).toBeFalsy()
    }) 
  })

  describe('isGenericCollection', () => { 
    test('should isGenericCollection return true when a generic array and is passed',()=> {
     const collection: unknown = []
     expect(isGenericCollection(collection)).toBeTruthy()
    }) 
    test('should isGenericCollection return false when a generic non-array is passed',()=> {
        const collection = null
     expect(isGenericCollection(collection)).toBeFalsy()
    }) 
  })

  describe('isGenericResponseData', () => { 
    test('should isGenericResponseData return true when a generic response object is passed',()=> {
     const response = {
        results: [],
        count: 0
     }
     expect(isGenericResponseData(response)).toBeTruthy()
    }) 
    test('should isGenericResponseData return false when a generic response object is passed but its results prop is not an array',()=> {
        const response = {
            results: null,
            count: 0
         }
     expect(isGenericResponseData(response)).toBeFalsy()
    })
    test('should isGenericResponseData return false when a generic response object is passed but its count prop does not exist',()=> {
        const response = {
            results: [],
         }
     expect(isGenericResponseData(response)).toBeFalsy()
    }) 
    describe('isPlanet', () => { 
        test('should isPlanet return true when a generic object with its requiredKeys is passed',()=> {
         const obj: unknown = {
            name: 'name', diameter:'diameter', gravity:'gravity', population:'population', terrain:'terrain'
         }
         expect(isPlanet(obj)).toBeTruthy()
        }) 
        test('should isPlanet return false when a generic object with just some of its requiredKeys is passed',()=> {
            const obj: unknown = {
               name: 'name', diameter:'diameter', gravity:'gravity', population:'population'
            }
            expect(isPlanet(obj)).toBeFalsy()
        })
        test('should isPlanet return false when a non-object is passed',()=> {
            const obj = null
            expect(isPlanet(obj)).toBeFalsy()
        })
      })
      describe('isPlanetsCollection', () => { 
        test('should isPlanetsCollection return true when a collection of Planet objects is passed',()=> {
            const collection: unknown = [{
                name: 'name', diameter:'diameter', gravity:'gravity', population:'population', terrain:'terrain'
            }]
            expect(isPlanetsCollection(collection)).toBeTruthy()
        }) 
        test('should isPlanetsCollection return false when a collection of Planet objects without all requiredKeys is passed',()=> {
            const collection: unknown = [{
               name: 'name', diameter:'diameter', gravity:'gravity', population:'population'
            }]
            expect(isPlanetsCollection(collection)).toBeFalsy()
        })
        test('should isPlanetsCollection return false when a non-array is passed',()=> {
            const collection = null
            expect(isPlanetsCollection(collection)).toBeFalsy()
        })
      })
      describe('isSpecie', () => { 
        test('should isSpecie return true when a generic object with its requiredKeys is passed',()=> {
         const obj: unknown = {
            people: 'people', homeworld:'homeworld', classification:'classification', designation:'designation', language:'language'
         }
         expect(isSpecie(obj)).toBeTruthy()
        }) 
        test('should isSpecie return false when a generic object with just some of its requiredKeys is passed',()=> {
            const obj: unknown = {
                people: 'people', homeworld:'homeworld', classification:'classification', designation:'designation'
             }
            expect(isSpecie(obj)).toBeFalsy()
        })
        test('should isSpecie return false when a non-object is passed',()=> {
            const obj = null
            expect(isSpecie(obj)).toBeFalsy()
        })
      })
      describe('isSpeciesCollection', () => { 
        test('should isSpeciesCollection return true when a collection of Specie objects is passed',()=> {
            const collection: unknown = [{
                people: 'people', homeworld:'homeworld', classification:'classification', designation:'designation', language:'language'
            }]
            expect(isSpeciesCollection(collection)).toBeTruthy()
        }) 
        test('should isSpeciesCollection return false when a collection of Specie objects without all requiredKeys is passed',()=> {
            const collection: unknown = [{
                people: 'people', homeworld:'homeworld', classification:'classification', designation:'designation'
            }]
            expect(isSpeciesCollection(collection)).toBeFalsy()
        })
        test('should isSpeciesCollection return false when a non-array is passed',()=> {
            const collection = null
            expect(isSpeciesCollection(collection)).toBeFalsy()
        })
      })
  })
