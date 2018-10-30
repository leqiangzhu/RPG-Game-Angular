import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'app/models/question.model';
import { GameService } from '../game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [GameService]
})
export class AdminComponent implements OnInit {

  @Input() selectedQuestion;
  
  questions;
  constructor(private router: Router, private gameService: GameService) {
    this.selectedQuestion = null;
  }

  ngOnInit() {
    this.questions = this.gameService.getQuestions();    
  }


  submitForm (newQuestion: string, newAnswer: number, newLevel: number, poinnewPointts: number){
      var addQuestion : Question = new Question(newQuestion, newAnswer, newLevel, poinnewPointts);
      this.gameService.addQuestionMethod(addQuestion);
  }

  // goToDetailPage(clickedQuestion: Question) {
  //   this.router.navigate(['questions', clickedQuestion.$key]);
  // };  

  selectQuestiontoUpdate(question: Question) {
    this.selectedQuestion = question;
  }

}
