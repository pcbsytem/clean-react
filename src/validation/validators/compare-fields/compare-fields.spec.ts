import { CompareFieldValidation } from './compare-fields'
import { InvalidFieldError } from '@/validation/errors'
import faker from 'faker'

const makeSut = (valueToCompare: string): CompareFieldValidation =>
  new CompareFieldValidation(faker.database.column(), valueToCompare)

describe('CompareFieldValidation', () => {
  test('Should return error if compare is invalid', () => {
    const sut = makeSut(faker.random.word())
    const error = sut.validate('')
    expect(error).toEqual(new InvalidFieldError())
  })
})
