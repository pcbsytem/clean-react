import type { AuthenticationParams } from '@/domain/usecases/authentication'
import { type AccountModel } from '../models/account-model'
import fake from 'faker'

export const mockAuthentication = (): AuthenticationParams => ({
  email: fake.internet.email(),
  password: fake.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: fake.random.uuid()
})
