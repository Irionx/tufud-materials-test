import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tf-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() pageSize: number = 0;
  @Input() length: number = 0 ;
  @Input() pageIndex: number = 0;
  @Input() itemsQuantity?: number = 0;
  @Output() page = new EventEmitter<any>();
  disabled = false;

  constructor() {}

  ngOnInit(): void {}

  pageNumbers() {
    const arrayAux = [];
    const totalPages = Math.ceil(this.length / this.pageSize);
    const gap = totalPages - this.pageIndex;

    if (totalPages < this.pageSize) {
      for (let i = 0; i < totalPages; i++) {
        arrayAux.push(1 + i);
      }
      return arrayAux;
    }

    if (gap > this.pageSize) {
      for (let i = 1; i < this.pageSize; i++) {
        arrayAux.push(this.pageIndex + i);
      }
      return arrayAux;
    } else {
      const first = totalPages - this.pageSize + 3;
      const last = totalPages - first;
      for (let i = 0; i <= last; i++) {
        arrayAux.push(first + i);
      }
      return arrayAux;
    }
  }

  nextPage() {
    this.pageIndex += 1;
    this.disabled = this.pageNumbers().pop() === this.pageIndex + 1;
    this.page.emit(this.pageIndex);
  }

  previousPage() {
    this.pageIndex -= 1;
    this.disabled = this.pageNumbers().pop() === this.pageIndex + 1;
    this.page.emit(this.pageIndex);
  }

  selectPage(page: number) {
    this.pageIndex = page;
    this.disabled = this.pageNumbers().pop() === this.pageIndex + 1;
    this.page.emit(this.pageIndex);
  }
}
