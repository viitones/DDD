import { randomUUID } from "node:crypto";
import { Slug } from "./value-objects/slug";

interface QuestionProps {
  title: string, 
  authorId: string, 
  content: string
  slug: Slug
}
export class Question {
  public title: string;
  public content: string;
  public id: string;
  public authorId: string
  public slug: Slug;

  constructor(props: QuestionProps, id?: string) {
    this.title = props.title;
    this.content = props.content;
    this.authorId = props.authorId
    this.id = id ?? randomUUID()
    this.slug = props.slug
  }
}
