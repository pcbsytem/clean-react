import { makeAxiosHttpClient } from '@/main/factories/http/axios-http.client-factory'
import { makeApiUrl } from '@/main/factories/http/api-url-factory'
import { AddAccount } from '@/domain/usecases'
import { RemoteAddAccount } from '@/data/usecases'

export const makeRemoteAddAccount = (): AddAccount => {
  return new RemoteAddAccount(
    makeApiUrl('/signup'),
    makeAxiosHttpClient()
  )
}
