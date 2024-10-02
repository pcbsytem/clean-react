export type SurveyModel = {
  id: string
  question: string
  answer: [
    {
      image?: string
      answer: string
    }
  ]
  date: string
  didAnswer: boolean
}
