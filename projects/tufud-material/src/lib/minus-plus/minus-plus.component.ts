import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'tf-minus-plus',
  templateUrl: './minus-plus.component.html',
  styleUrls: ['./minus-plus.component.css'],
})
export class MinusPlusComponent implements OnInit {
  @Output() quantityEmitter = new EventEmitter<number>();
  @Input() quantity: number = 0;

  constructor() {}

  ngOnInit(): void {
   
  }

  inc() {
    this.quantity += 1;
    this.quantityEmitter.emit(this.quantity);
  }

  dec() {
    if (this.quantity > 0) this.quantity -= 1;
    this.quantityEmitter.emit(this.quantity);
  }

  handleChange(event:any) {
    if (event.target.value > 0 ) {
      this.quantity = parseInt(event.target.value);
    } else {
      this.quantity = 0;
      event.target.value = 0
    }
    this.quantityEmitter.emit(this.quantity);
  }
}


