import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  messages = [];

  constructor(private dataService: DataService) { }

  getMessages(): void {
    this.dataService.getData().then(msgList => this.messages = msgList);
  }

  ngOnInit() {
    this.getMessages();
  }

}
