import React from 'react'
import faker from 'faker'
import 'jest-localstorage-mock'
import {
  cleanup,
  fireEvent,
  render,
  RenderResult,
  waitFor
} from '@testing-library/react'
import Login from './login'
import { AuthenticationSpy, ValidationStub } from '@/presentation/test'
import { InvalidCredentialsError } from '@/domain/errors'

type SutTypes = {
  sut: RenderResult
  authenticationSpy: AuthenticationSpy
}

type SutParams = {
  validationError: string
}

const mockUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => {
  const actualReactRouterDom = jest.requireActual('react-router-dom')
  return {
    ...actualReactRouterDom,
    useNavigate: () => mockUsedNavigate
  }
})

const makeSut = (params?: SutParams): SutTypes => {
  const validationStub = new ValidationStub()
  const authenticationSpy = new AuthenticationSpy()
  validationStub.errorMessage = params?.validationError
  const sut = render(
    <Login validation={validationStub} authentication={authenticationSpy} />
  )
  return {
    sut,
    authenticationSpy
  }
}

const simulateValidSubmit = async (
  sut: RenderResult,
  email = faker.internet.email(),
  password = faker.internet.password()
): Promise<void> => {
  populateEmailField(sut, email)
  populatePasswordField(sut, password)
  const form = sut.getByTestId('form')
  fireEvent.submit(form)
  await waitFor(() => form)
}

const populateEmailField = (
  sut: RenderResult,
  email = faker.internet.email()
): void => {
  const emailInput = sut.getByTestId('email')
  fireEvent.input(emailInput, {
    target: { value: email }
  })
}

const populatePasswordField = (
  sut: RenderResult,
  password = faker.internet.email()
): void => {
  const passwordInput = sut.getByTestId('password')
  fireEvent.input(passwordInput, {
    target: { value: password }
  })
}

const testStatusForField = (
  sut: RenderResult,
  fieldName: string,
  validationError?: string
): void => {
  const fieldStatus = sut.getByTestId(`${fieldName}-status`)
  expect(fieldStatus.title).toBe(validationError || 'Tudo certo!')
  expect(fieldStatus.textContent).toBe(validationError ? '🔴' : '🟢')
}

const testErrorWrapChildCount = (sut: RenderResult, count: number): void => {
  const errorWrap = sut.getByTestId('error-wrap')
  expect(errorWrap.childElementCount).toBe(count)
}

const testElementExist = (sut: RenderResult, fieldName: string): void => {
  const el = sut.getByTestId(fieldName)
  expect(el).toBeTruthy()
}

const testElementText = (
  sut: RenderResult,
  fieldName: string,
  text: string
): void => {
  const el = sut.getByTestId(fieldName)
  expect(el.textContent).toEqual(text)
}

const testButtonIsDisabled = (
  sut: RenderResult,
  fieldName: string,
  isDisabled: boolean
): void => {
  const button = sut.getByTestId(fieldName) as HTMLButtonElement
  expect(button.disabled).toBe(isDisabled)
}

describe('Login Component', () => {
  afterEach(cleanup)

  beforeEach(() => {
    localStorage.clear()
  })

  test('Should start with initial state', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    testErrorWrapChildCount(sut, 0)
    testButtonIsDisabled(sut, 'submit', true)
    testStatusForField(sut, 'email', validationError)
    testStatusForField(sut, 'password', validationError)
  })

  test('Should show email error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    populateEmailField(sut)
    testStatusForField(sut, 'email', validationError)
  })

  test('Should show password error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    populatePasswordField(sut)
    testStatusForField(sut, 'email', validationError)
  })

  test('Should show valid email state if Validation succeeds', () => {
    const { sut } = makeSut()
    populateEmailField(sut)
    testStatusForField(sut, 'email')
  })

  test('Should show valid password state if Validation succeeds', () => {
    const { sut } = makeSut()
    populatePasswordField(sut)
    testStatusForField(sut, 'password')
  })
  test('Should enable subimit if form is valid', () => {
    const { sut } = makeSut()
    populateEmailField(sut)
    populatePasswordField(sut)
    testButtonIsDisabled(sut, 'submit', false)
  })

  test('Should show spinner on submit', async () => {
    const { sut } = makeSut()
    await simulateValidSubmit(sut)
    testElementExist(sut, 'spinner')
  })

  test('Should call Authentication with correct values', async () => {
    const { sut, authenticationSpy } = makeSut()
    const email = faker.internet.email()
    const password = faker.internet.password()
    await simulateValidSubmit(sut, email, password)
    expect(authenticationSpy.params).toEqual({ email, password })
  })

  test('Should call Authentication only once', async () => {
    const { sut, authenticationSpy } = makeSut()
    await simulateValidSubmit(sut)
    await simulateValidSubmit(sut)
    expect(authenticationSpy.callsCount).toEqual(1)
  })

  test('Should not call Authentication if form is invalid', async () => {
    const validationError = faker.random.words()
    const { sut, authenticationSpy } = makeSut({ validationError })
    await simulateValidSubmit(sut)
    expect(authenticationSpy.callsCount).toEqual(0)
  })

  test('Should present error if Authentication fails', async () => {
    const { sut, authenticationSpy } = makeSut()
    const error = new InvalidCredentialsError()
    jest
      .spyOn(authenticationSpy, 'auth')
      .mockReturnValueOnce(Promise.reject(error))
    await simulateValidSubmit(sut)
    testElementText(sut, 'main-error', error.message)
    testErrorWrapChildCount(sut, 1)
  })

  test('Should add accessToken to localstorage on success', async () => {
    const { sut, authenticationSpy } = makeSut()
    await simulateValidSubmit(sut)
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'accessToken',
      authenticationSpy.account.accessToken
    )
    expect(mockUsedNavigate).toHaveBeenCalledWith('/', { replace: true })
  })

  test('Should go to signup page', () => {
    const { sut } = makeSut()
    const register = sut.getByTestId('signup')
    fireEvent.click(register)
    expect(mockUsedNavigate).toHaveBeenCalledWith('/signup')
  })
})
