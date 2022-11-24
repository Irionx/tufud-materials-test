import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as XLSX from 'xlsx';
import {TabulatorFull as Tabulator} from 'tabulator-tables'

@Component({
  selector: 'app-testo',
  templateUrl: './testo.component.html',
  styleUrls: ['./testo.component.css']
})
export class TestoComponent implements OnInit {

  tableData: any[]  
  @Input() columnNames: any[]
  tab = document.createElement('div');

  ngOnInit(): void {}
  
  ExcelData:any

  readExcel(event){
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file)
    fileReader.onload = () => {
      var workbook = XLSX.read(fileReader.result,{type:'binary'});
      var sheetNames = workbook.SheetNames;
      this.ExcelData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[0]])
      this.tableData = this.ExcelData
      this.drawTable()
    }
  }

  private drawTable(): any {
    var tabulator = new Tabulator(this.tab, {
      data: this.tableData,
      columns: [
      {title:"Nombre", field:"Nombre", width:150, editor:'input'},
      {title:"Edad", field:"Edad", width:150, editor:'input'},
      {title:"Altura", field:"Altura", width:150, editor:'input'},
    ],
      layout: 'fitDataTable',
    });
    document.getElementById('my-tabular-table').appendChild(this.tab);
    document.getElementById("download-xlsx").addEventListener("click", ()=>{
      tabulator.download("xlsx", "data_salida_de_test0.xlsx", {sheetName:"Hoja 1"});
  });
    return tabulator
  }

}
