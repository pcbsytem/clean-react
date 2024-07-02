import type { AuthenticationParams } from 'domain/usecases/authentication'
import fake from 'faker'

export const mockAuthentication = (): AuthenticationParams => ({
  email: fake.internet.email(),
  password: fake.internet.password()
})
