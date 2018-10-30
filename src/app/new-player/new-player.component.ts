import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Player } from 'app/models/player.model';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css']
})
export class NewPlayerComponent implements OnInit {
  newPlayer: Player = null;

  @Output() PlayerSender = new EventEmitter();

  constructor() { }
  
  ngOnInit() {
  }
  createNewPlayer(player: string, level: string) {
    this.newPlayer = new Player(player, parseInt(level));
    this.PlayerSender.emit(this.newPlayer);
  }


}
