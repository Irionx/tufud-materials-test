import { Component, Input, OnInit } from '@angular/core';
import { Tabulator } from 'tabulator-tables';

@Component({
  selector: 'app-table',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class TableComponent implements OnInit {

  tableData: any[] = 
    [
      {
          "NOMBRE": "juan",
          "EDAD": 22,
          "ALTURA": 1.7
      },
      {
          "NOMBRE": "marina",
          "EDAD": 18,
          "ALTURA": 2
      },
      {
          "NOMBRE": "ricardo",
          "EDAD": 70,
          "ALTURA": 1.5
      }
  ];
  columnNames: any[] = [
    {title:"Name", field:"NOMBRE", width:150},
    {title:"Age", field:"EDAD"},
    {title:"Altura", field:"ALTURA"},

  ];

  tab = document.createElement('div');

  constructor() {
  }

  ngOnInit(): void {
    var table = this.drawTable()
    
    
    setInterval(() => {
      console.log(table.redraw());
      this.tableData.push({id: this.tableData.length + 1, name: Math.random(), age: Math.round(Math.random()), col: "blue"})
    }, 2000)
  }

  private drawTable(): any {
    var tabulator = new Tabulator(this.tab, {
      data: this.tableData,
      columns: this.columnNames,
      layout: 'fitDataTable',
      
    });
    
    document.getElementById('my-tabular-table').appendChild(this.tab);

    return tabulator
  }

}