import { Injectable } from '@angular/core';
import { Answer } from '../models/Answer';


import { Question } from '../models/Question';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  IndexQuestion = 0;
  Answer_Selected = '';
  Button = true;
  CheckAnswer = false;
  public Result :any[] = [];
  public List_questions : Question[] = [
   new Question ('What is Capital of Argentina?',[
     new Answer("Bogotá",0),
     new Answer("La Paz",0),
     new Answer("Buenos Aires",1),
     new Answer("Lima",0),
   ]),
   new Question ('What is Capital of Perú?',[
    new Answer("Lima",1),
    new Answer("Montevideo",0),
    new Answer("Caracas",0),
    new Answer("Quito",0),
  ]),
  new Question ('What is Capital of Bolivia?',[
    new Answer("Asunción",0),
    new Answer("Santiago de Chile",0),
    new Answer("Bogotá",0),
    new Answer("Sucre",1),
  ]),
  new Question ('What is Capital of Ecuador?',[
    new Answer("Quito",1),
    new Answer("Lima",1),
    new Answer("Santiago de Chile",0),
    new Answer("Cayena",0),
  ])
  ]

  
  constructor() { 
  }

  getList():any{
    return this.List_questions.slice();
  }

  

}
