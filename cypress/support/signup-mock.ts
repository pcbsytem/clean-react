import faker from 'faker';
import * as Helper from './http-mocks'


export const mockEMailInUseError = (): void => Helper.mockEMailInUseError(/signup/)
export const mockUnexpectedError = (): void => Helper.mockUnexpectedError(/signup/, 'POST')
export const mockInvalidData = (): void => Helper.mockOk(/signup/, 'POST', {
  invalidProperty: faker.random.uuid()
})