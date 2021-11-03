import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from '../models/Answer';
import { Question } from '../models/Question';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  List_of_questions : Question[];
  message = "Accept"




  constructor(public questions:DataService,private router: Router) {
    this.List_of_questions = this.questions.getList();
  }

  ngOnInit(): void {
    this.List_of_questions = this.questions.getList();
  }

  GetQuestion():string{
    return this.List_of_questions[this.questions.IndexQuestion].Question;
  }

  Answer_Selected(answers:Answer):void{
    this.questions.Answer_Selected = answers.Name;
    this.questions.Button = false;
  }

  Change_selection(AnswerSelected: Answer,i:number):string{
    let Value = "";
    if(AnswerSelected.Name == this.questions.Answer_Selected && this.questions.CheckAnswer == false){
      Value = "bg-primary";
    }

    if(AnswerSelected.Name == this.questions.Answer_Selected && AnswerSelected.IsCorrect == 1 
      && this.questions.CheckAnswer == true){
      Value = "bg-success";
      this.questions.Result.push({
        Answer: this.questions.Answer_Selected ,
        Correct_or_Not:  AnswerSelected.IsCorrect
      })
    }

    if(AnswerSelected.Name == this.questions.Answer_Selected && AnswerSelected.IsCorrect == 0 
      && this.questions.CheckAnswer == true){
      Value = "bg-danger";
      this.questions.Result.push({
        Answer: this.questions.Answer_Selected ,
        Correct_or_Not:  AnswerSelected.IsCorrect
      })
    }
    return Value;
  }

  Button():void{
    this.questions.CheckAnswer = true;
    switch(this.message){
      case "Accept":
        if((this.questions.List_questions.length -1 ) == this.questions.IndexQuestion){
          this.message = "Result";
        }
        else{
          this.message = "Next";
        }
        break;
      case "Next":       
        this.questions.IndexQuestion++;
        this.questions.CheckAnswer = false;
        this.questions.Answer_Selected = '';
        this.questions.Button = true;
        this.message = "Accept";
        this.questions.Result.splice(this.questions.Result.length-1,1);
        break;
      case "Result":
        this.questions.Result.splice(this.questions.Result.length-1,1)
        this.router.navigate (['Result']);
        break;
    }
  }


  IsCorrect(AnswerSelected:Answer):boolean{
    if(AnswerSelected.Name == this.questions.Answer_Selected && AnswerSelected.IsCorrect == 1 
      && this.questions.CheckAnswer == true){
      return  true;
    }  
    else{
      return false;
    }
  }


  IsNotCorrect(AnswerSelected:Answer):boolean{
    if(AnswerSelected.Name == this.questions.Answer_Selected && AnswerSelected.IsCorrect == 0 
      && this.questions.CheckAnswer == true){
      return  true;
    }  
    else{
      return false;
    }
  }
  
}
