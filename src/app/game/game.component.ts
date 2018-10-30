import { Component } from '@angular/core';
import { Player } from 'app/models/player.model';
import { Question } from 'app/models/question.model';
import { GameService } from 'app/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [GameService]
})
export class GameComponent {

  player: Player;
  beginQuestion :Question;
  constructor(private gameService: GameService) {
    this.player = null;
  }

  ngOnInit() {
    
  }

  newPlayer(inputPlayer: Player) {
    this.player = inputPlayer;
  }

  getQuestionLevel(){
    this.beginQuestion.level=this.player.level;
  }

  getQuestionByLevel(){
   return this.beginQuestion;
  }


  playGame(){
    this.beginQuestion=this.gameService.getQuestionByLevel(this.player.level)
    
  }
}
