import { AuthenticationParams } from '@/domain/usecases'
import { AccountModel } from '../models'
import fake from 'faker'

export const mockAuthentication = (): AuthenticationParams => ({
  email: fake.internet.email(),
  password: fake.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: fake.random.uuid()
})
