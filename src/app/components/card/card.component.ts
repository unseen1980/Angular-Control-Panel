import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() type: string;
  @Input() num: number;
  constructor() { }

  ngOnInit() {
    console.log(this.num, this.type)
  }

}
