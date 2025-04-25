import {expect, test} from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'
import { AnswerRepository } from '../repositories/answers-repository'
import { Answer } from '../entities/answer'

const fakeAnswersRepository: AnswerRepository = {
  create: async(answer: Answer)=>{
    return
  }
}

test('create a answer', async ()=> {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await answerQuestion.execute({
    questionId: 'question-id',
    instructorId: 'user-id',
    content: 'content'
  })

  expect(answer.content).toEqual('content')
})