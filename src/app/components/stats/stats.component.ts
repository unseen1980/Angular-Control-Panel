import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { Observable } from 'rxjs/RX';


@Component({
  selector: 'stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  messages = [];
  cardStats = {};
  cardsObjSize: number;

  constructor(private dataService: DataService) { }

  // Promise
  getMessages(): void {
    this.dataService.getData()
      .then(msgList => this.messages = msgList);
  }

  // Observable
  getMessagesObservable() {
    this.dataService.getDataObservable()
      .subscribe(
      res => this.messages.push(JSON.parse(res)),
      error => console.log(error),
      () => {
        this.messages.forEach((msg) => {
          if (this.cardStats[msg.type] >= 0) {
            this.cardStats[msg.type] = this.cardStats[msg.type] + 1
          }
          else {
            this.cardStats[msg.type] = 0;
          }
        })
        this.cardsObjSize = Object.keys(this.cardStats).length;
      }
      );

  }

  ngOnInit() {
    this.getMessagesObservable();

  }

}

