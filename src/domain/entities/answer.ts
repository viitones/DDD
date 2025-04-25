import { randomUUID } from "node:crypto";

interface AnswerProps{
  content: string, 
  questionId: string, 
  authorId: string
}
export class Answer {
  public content: string;
  public id: string;
  public authorId: string;
  public questionId: string;

  constructor(props: AnswerProps, id?: string) {
    this.content = props.content;
    this.questionId = props.questionId;
    this.authorId = props.authorId;
    this.id = id ?? randomUUID()
  }
}