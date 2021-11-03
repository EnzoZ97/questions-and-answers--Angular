import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from '../models/Answer';
import { Question } from '../models/Question';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  List_of_Result: any[] = [];
  List_of_questions: Question[] = [];
  constructor(public questions: DataService,
    private router: Router) { }

  ngOnInit(): void {
    this.List_of_questions = this.questions.getList();
    this.List_of_Result = this.questions.Result;
  }

  CheckSelected(ResultSeleted:Answer,index:number):string{
    let Value = "";
    if(ResultSeleted.Name == this.List_of_Result[index].Answer && this.List_of_Result[index].Correct_or_Not == 1 ){
      Value = "bg-success";
    }
    if(ResultSeleted.Name  == this.List_of_Result[index].Answer && this.List_of_Result[index].Correct_or_Not == 0 ){
      Value = "bg-danger";
    }
    return Value;
  }


  IsNotCorrect(AnswerSelected:Answer,index:number):boolean{
    if(AnswerSelected.Name == this.List_of_Result[index].Answer 
      && this.List_of_Result[index].Correct_or_Not == 0 
      ){
      return  true;
    }  
    else{
      return false;
    }
  }

  IsCorrect(AnswerSelected:Answer,index:number):boolean{
    if(AnswerSelected.Name == this.List_of_Result[index].Answer 
      && this.List_of_Result[index].Correct_or_Not == 1 
      ){
      return  true;
    }  
    else{
      return false;
    }
  }

  OverAgain():void{
    this.questions.IndexQuestion = 0
    this.questions.Answer_Selected = '';
    this.questions.Button = true;
    this.questions.CheckAnswer = false;
    this.questions.Result.splice(0,this.questions.Result.length);
    this.router.navigate (["/dashboard"]);
  }


}
