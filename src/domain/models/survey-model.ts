export type SurveyModel = {
  id: string
  question: string
  answers: SurveyAnswerModel[]
  date: string
  didAnswer: boolean
}

export type SurveyAnswerModel = {
  image?: string
  answer: string
}
