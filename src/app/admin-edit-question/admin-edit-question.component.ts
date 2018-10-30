import { Component, OnInit, Input } from '@angular/core';
import { GameService } from 'app/game.service';
import { Question } from 'app/models/question.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-edit-question',
  templateUrl: './admin-edit-question.component.html',
  styleUrls: ['./admin-edit-question.component.css'],
  providers: [GameService]
})
export class AdminEditQuestionComponent implements OnInit {
  @Input() selectedQuestion;

  constructor(private router: Router, private gameService: GameService) {}

  ngOnInit() {
  }
  
  beginUpdatingQuestion(updatingQuestion: Question) {
    this.gameService.updateQuestion(updatingQuestion);
  }

}
