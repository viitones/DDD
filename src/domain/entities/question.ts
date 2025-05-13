import { randomUUID } from "node:crypto";
import { Slug } from "./value-objects/slug";
import { Entity } from "../../core/entities/entity";

interface QuestionProps {
  title: string, 
  authorId: string, 
  content: string
  slug: Slug
}
export class Question extends Entity<QuestionProps> {

}
