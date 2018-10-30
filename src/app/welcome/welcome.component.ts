import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Router } from '@angular/router';
import { Question } from '../models/question.model';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [GameService]
})
export class WelcomeComponent implements OnInit {
  questions;
  constructor(private router: Router, private gameService: GameService) {}

  ngOnInit() {
    this.questions = this.gameService.getQuestions();    
  }

  // goToDetailPage(clickedAlbum: Question) {
  //   this.router.navigate(['albums', clickedAlbum.id]);
  // };

}
