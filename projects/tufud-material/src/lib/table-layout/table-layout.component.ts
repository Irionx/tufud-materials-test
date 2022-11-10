import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TLActions, TLHeaderAdditionalText } from './table-layout.interface';

@Component({
  selector: 'tf-table-layout',
  templateUrl: './table-layout.component.html',
  styleUrls: ['./table-layout.component.css']
})
export class TableLayoutComponent implements OnInit {

  @Input() displayedColumns: string[] = [];
    //* Array donde se ingresan todos los headers de la tabla
  @Input() dataSource: MatTableDataSource<any> | any[] = [];
  //* Array donde se ingresan los datos de cada celda
  @Input() actions: TLActions[] = [];
    //* Array del tipo TLActions, cada propiedad de un objteto TLActions le asigna una carácteristica especifica a cada una de las acciones que se renderizaran en la columnas de acciones o detalle
  @Input() columnsWithActions: string[] = [];
  //* Array con las columnas que contendran acciones, si el nombre de la columna no está en este array no se activará el evento click sobre sus datos 
  @Input() currencyColumns: string[] = [];
  //* Array con las columnas en cuyos datos se debe renderizar antes el signo $
  @Input() statusOptions: string[] = [];
  //*Array con las opciones de estatus variable. Solo hay que agregarlo si se necesita dicha caracteristica
  @Input() addTextToHeader: TLHeaderAdditionalText[] = [];
  //*Array del tipo TLHeaderAdditionalText para indicar headers con textos adicionales dinamicos, como por ejemplo el precio sin iva incluido.
  @Input() noHeaderInMobileStyles:string[] = []
  //*Array con las nombres de las columnas que no requieren headers en estilos mobile. 
  @Input() showCartButton: boolean |undefined;
 //* Booleano para indicar si queremo añador el botón de carrito que utilizamos para sumar productos al carrito por ejemplo
  @Input() isQuantityModifiable: boolean |undefined;
 //*Booleano ue cuando está en true renderiza un plus-minus button para modificar cantidades que está asociado al evento quantityEvent 
  @Input() nameColumnWidth: number = 0;
  //* Con este número podemos indicar el ancho de la columna name, el resto de las columnas se se repartiran el ancho de pantalla restante.

  @Output() clickEventDataEmmitter = new EventEmitter<any>();
  //*Emite los datos del registro asociado a ese click
  @Output() quantityEventEmmitter = new EventEmitter<any>();
  //*Emite los datos del registro asociado a ese click y la variación de la cantidad asociada
  @Output() statusEventEmmitter = new EventEmitter<any>();
   //*Emite los datos del registro asociado a los cambios en el selector y el valor nuevo del selector


   public isMobile: boolean |undefined
   private mobileQuery:MediaQueryList | undefined;

  constructor() { }

  ngOnInit(): void {
    this.checkWindowWidth(660);
  }

  switchActionOptions(option: string) {
    if (option === 'actions' || option === 'detail') return option;
    else return '';
  }

  actionNameByCondition(dataValue: any, action: any) {
    if (!action.conditionToSwitchNames) return action.name;
    return dataValue[action.propertyToVerify] !== action.conditionToSwitchNames
      ? action.name
      : action.alternativeName;
  }

  formatHeader(header: string): string {
    let auxHeader: string = '';

    if (header === 'name') {
      auxHeader = 'Nombre';
    }
    if (header === 'phone') {
      auxHeader = 'Teléfono';
    }
    if (header === 'email') {
      auxHeader = 'Email';
    }
    if (header === 'address') {
      auxHeader = 'Dirección';
    }
    if (header === 'actions') {
      auxHeader = 'Acciones';
    }
    if (header === 'sku') {
      auxHeader = 'SKU';
    }
    if (header === 'brand') {
      auxHeader = 'Marca';
    }
    if (header === 'price') {
      auxHeader = 'Precio';
    }
    if (header === 'unit') {
      auxHeader = 'Unidad';
    }
    if (header === 'status') {
      auxHeader = 'Estado';
    }
    if (header === 'id') {
      auxHeader = 'N. de Orden';
    }
    if (header === 'customer_name') {
      auxHeader = 'Cliente';
    }
    if (header === 'provider_name') {
      auxHeader = 'Proveedor';
    }
    if (header === 'total') {
      auxHeader = 'Total';
    }
    if (header === 'date_created') {
      auxHeader = 'Fecha de encargo';
    }
    if (header === 'detail') {
      auxHeader = 'Detalle';
    }
    if (header === 'nickname') {
      auxHeader = 'Nickname';
    }
    if (header === 'modifiedTimestamp') {
      auxHeader = 'Fecha de creación';
    }
    if (header === 'amount') {
      auxHeader = 'Cantidad';
    }
    if (header === 'subtotal') {
      auxHeader = 'Subtotal';
    }

    if (this.addTextToHeader.map((e) => e.column).includes(header)) {
      let additionalText = this.addTextToHeader.find(
        (e) => e.column === header
      )?.content;

      return auxHeader + ` ${additionalText}`;
    } else {
      return auxHeader;
    }
  }

  nameColumnWidthToString(): string {
    return this.nameColumnWidth + '%';
  }

  columnWidthSelector(): string {
    let totalWidth: number = this.displayedColumns.includes('name')
      ? 100 - this.nameColumnWidth
      : 100;
    return String(Math.floor(totalWidth / this.displayedColumns.length)) + '%';
  }

  clickEvent(header: string, actionName: string|undefined, dataValue: any) {
    if (this.columnsWithActions?.includes(header))
      this.clickEventDataEmmitter.emit({ name: actionName, data: dataValue });
  }

  quantityEvent(quantity: number, dataValue: any) {
    this.quantityEventEmmitter.emit({ quantity: quantity, data: dataValue });
  }

  statusEvent(dataValue: any, value: any) {
    this.statusEventEmmitter.emit({ data: dataValue, selectValue: value });
  }

  statusClassSelector(value: string): string {
    switch (value) {
      case 'Pendiente':
        return 'class1';
      case 'Cancelada':
        return 'class2';
      case 'Recibida':
        return 'class4';
      case 'Entregada':
        return 'class4';
      case 'Pendiente de revisión':
        return 'class5';
      default:
        return '';
    }
  }

  actionButtonShow(action: any, data: any): boolean {
    if (action.actionButton) {
      if (
        data.comments ||
        (data.additional_info && action.name === 'comment')
      ) {
        return true;
      }
      if (action.name !== 'comment') return true;
    }

    return false;
  }

  checkWindowWidth(width: number){
    this.isMobile = (window.innerWidth <= width)
    this.mobileQuery= window.matchMedia("(max-width:"+width+"px)")
    this.mobileQuery.addEventListener( "change", resp => { return this.isMobile= resp.matches })
  }  
}
