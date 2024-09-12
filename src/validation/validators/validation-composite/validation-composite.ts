import { Validation } from '@/presentation/protocols/validation'
import { FieldValidation } from '@/validation/protocols/field-validation'

export class ValidationComposite implements Validation {
  private constructor(private readonly validations: FieldValidation[]) { }

  static build(validations: FieldValidation[]): ValidationComposite {
    return new ValidationComposite(validations)
  }

  validate(fieldName: string, input: object): string {
    const validators = this.validations.filter(v => v.field === fieldName)
    for (const validator of validators) {
      const error = validator.validate(input)
      if (error) {
        return error.message
      }
    }
  }
}
