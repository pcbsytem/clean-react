import { makeAxiosHttpClient } from '@/main/factories/http/axios-http.client-factory'
import { makeApiUrl } from '@/main/factories/http/api-url-fatory'
import { RemoteAuthentication } from '@/data/usecases'
import { Authentication } from '@/domain/usecases'

export const makeRemoteAuthentication = (): Authentication => {
  return new RemoteAuthentication(
    makeApiUrl(),
    makeAxiosHttpClient()
  )
}