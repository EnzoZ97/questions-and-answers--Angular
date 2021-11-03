import { Answer } from "./Answer";

export class Question {
    Question : string;
    Answers : Answer [];

    constructor(question:string,answers: Answer[]){
        this.Question = question;
        this.Answers = answers;
    }
}