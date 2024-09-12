import { FieldValidation } from '@/validation/protocols/field-validation'
import { InvalidFieldError } from '@/validation/errors'

export class CompareFieldValidation implements FieldValidation {
  constructor(
    readonly field: string,
    private readonly fieldToCompare: string
  ) { }

  validate(input: object): Error {
    console.log(input[this.field], this.fieldToCompare)
    return input[this.field] !== input[this.fieldToCompare] ? new InvalidFieldError() : null
  }
}
