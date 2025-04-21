import {expect, test} from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'

test('create a answer', ()=> {
  const answerQuestion = new AnswerQuestionUseCase()

  const answer = answerQuestion.execute({
    questionId: 'question-id',
    instructorId: 'user-id',
    content: 'content'
  })

  expect(answer.content).toEqual('content')
})