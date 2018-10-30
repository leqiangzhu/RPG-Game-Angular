import { Component } from '@angular/core';
import { Player } from 'app/models/player.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  player: Player;

  constructor() {
    this.player = null;
  }

  newPlayer(inputPlayer: Player) {
    this.player = inputPlayer;
  }
}
