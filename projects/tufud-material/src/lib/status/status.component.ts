import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StatusInfo } from './status.interface';

@Component({
  selector: 'tf-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
})
export class StatusComponent implements OnInit {
  @Input() statusInfo: StatusInfo | undefined;
  @Output() statusEmitter = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  statusChange(value: string) {
    if(this.statusInfo?.editable) {
    this.statusEmitter.emit(value);
    }
  }
}
