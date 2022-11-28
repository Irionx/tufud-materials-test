import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { TLActions, TLHeader } from "./table-layout.interface";
import { StatusInfo } from "../status/status.interface";

@Component({
  selector: "tf-table-layout",
  templateUrl: "./table-layout.component.html",
  styleUrls: ["./table-layout.component.css"],
})
export class TableLayoutComponent implements OnInit {
  @Input() displayedColumns: TLHeader[] = [];
  //* Array donde se ingresan todos los headers de la tabla,cada header es un objeto que tiene una propiedad column con el nombre del dato, una propiedad displayName con el nombre para mostrar y un propiedad additionalText con texto addicional que puede ser agregado condicionalmente por el componente padre.
  @Input() dataSource: MatTableDataSource<any> | any[] = [];
  //* Array donde se ingresan los datos de cada celda
  @Input() actions: TLActions[] = [];
  //* Array del tipo TLActions, cada propiedad de un objteto TLActions le asigna una carácteristica especifica a cada una de las acciones que se renderizaran en la columnas de acciones o detalle
  @Input() columnsWithActions: string[] = [];
  //* Array con las columnas que contendran acciones, si el nombre de la columna no está en este array no se activará el evento click sobre sus datos
  @Input() currencyColumns: string[] = [];
  //* Array con las columnas en cuyos datos se debe renderizar antes el signo
  @Input() statusInfoCollection: StatusInfo[] = [];
  //*Array con las opciones de estilos de estatus variable. Si la propieded editable es true se renderiza un select con las edit_option
  @Input() noHeaderInMobileStyles: string[] = [];
  //*Array con las nombres de las columnas que no requieren headers en estilos mobile.
  @Input() showCartButton: boolean | undefined;
  //* Booleano para indicar si queremo añador el botón de carrito que utilizamos para sumar productos al carrito por ejemplo
  @Input() isQuantityModifiable: boolean | undefined;
  //*Booleano ue cuando está en true renderiza un plus-minus button para modificar cantidades que está asociado al evento quantityEvent
  @Input() nameColumnWidth: number = 0;
  //* Con este número podemos indicar el ancho de la columna name, el resto de las columnas se se repartiran el ancho de pantalla restante.
  @Output() clickEventDataEmmitter = new EventEmitter<any>();
  //*Emite los datos del registro asociado a ese click
  @Output() quantityEventEmmitter = new EventEmitter<any>();
  //*Emite los datos del registro asociado a ese click y la variación de la cantidad asociada
  @Output() statusEventEmmitter = new EventEmitter<any>();
  //*Emite los datos del registro asociado a los cambios en el selector y el valor nuevo del selector

  public isMobile: boolean | undefined;
  private mobileQuery: MediaQueryList | undefined;

  columnsHeaders: string[] = [];
  //*Array que agrupa todos los headers según necesita el componente tabla de material UI

  constructor() {}

  ngOnInit(): void {
    this.checkWindowWidth(660);
    this.columnsHeaders = this.displayedColumns.map((column) => column.column);
  }

  switchActionOptions(option: string) {
    if (option === "actions" || option === "detail") return option;
    else return "";
  }

  actionNameByCondition(dataValue: any, action: any) {
    if (!action.conditionToSwitchNames) return action.name;
    return dataValue[action.propertyToVerify] !== action.conditionToSwitchNames
      ? action.name
      : action.alternativeName;
  }

  formatHeader(header: string): string | undefined {
    let auxHeader: TLHeader | undefined;

    auxHeader = this.displayedColumns.find(
      (columns) => columns.column === header
    );

    let headerToShow: string | undefined = auxHeader?.additionalText
      ? `${auxHeader.displayName} ${auxHeader.additionalText}`
      : auxHeader?.displayName;

    return headerToShow;
  }

  nameColumnWidthToString(): string {
    return this.nameColumnWidth + "%";
  }

  columnWidthSelector(): string {
    let totalWidth: number = this.columnsHeaders.includes("name")
      ? 100 - this.nameColumnWidth
      : 100;
    return String(Math.floor(totalWidth / this.columnsHeaders.length)) + "%";
  }

  clickEvent(header: string, actionName: string | undefined, dataValue: any) {
    if (this.columnsWithActions?.includes(header))
      this.clickEventDataEmmitter.emit({ name: actionName, data: dataValue });
  }

  quantityEvent(quantity: number, dataValue: any) {
    this.quantityEventEmmitter.emit({ quantity: quantity, data: dataValue });
  }

  statusEvent(dataValue: any, value: any) {
    this.statusEventEmmitter.emit({ data: dataValue, selectValue: value });
  }

  statusInfoSelector(status: string): StatusInfo | undefined {
    return this.statusInfoCollection.find(
      (statusInfo) => statusInfo.name === status
    );
  }

  actionButtonShow(action: any, data: any): boolean {
    if (action.actionButton) {
      if (
        data.comments ||
        (data.additional_info && action.name === "comment")
      ) {
        return true;
      }
      if (action.name !== "comment") return true;
    }

    return false;
  }

  checkWindowWidth(width: number) {
    this.isMobile = window.innerWidth <= width;
    this.mobileQuery = window.matchMedia("(max-width:" + width + "px)");
    this.mobileQuery.addEventListener("change", (resp) => {
      return (this.isMobile = resp.matches);
    });
  }
}
