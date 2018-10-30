import { Injectable } from '@angular/core';
import { Question } from './models/question.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GameService {
  questions: FirebaseListObservable<any[]>;
  questionToAsk: FirebaseListObservable<any[]>;


  constructor(private database: AngularFireDatabase) {
    this.questions = database.list('questions'); 
    this.questionToAsk = database.list('questions');   
  }

    getQuestions() {
      return this.questions;
    }

    addQuestionMethod(newQuestion: Question) {
      this.questions.push(newQuestion);
    }

    getQuestionById(questionId: string) {
      return this.database.object('/questions/' + questionId);
    }

    updateQuestion(localQuestion) {
      let questionInFireBase = this.getQuestionById(localQuestion.$key);
      questionInFireBase.update({
        question: localQuestion.question,
        answer: localQuestion.answer,
        level: localQuestion.level,
        points: localQuestion.points
      });
    }

    getQuestionByLevel(playerLevel: number) {
      let filteredList;
      this.questionToAsk.forEach(question => {
        if(question[0].level!=1){
          alert("hahah");
        }
    
        console.log(question);
      });
     
      console.log(this.questionToAsk);
      // this.questionToAsk.forEach(question => {
      //   if (question[0].level === playerLevel) {
      //     filteredList.push(question);
      //   }
      // });
      return filteredList;
    }
}
