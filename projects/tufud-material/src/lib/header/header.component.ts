import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "tf-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  @Input() cartIcon: boolean = true;
  @Input() shoppingCartAmount!: string;
  @Input() header!: any;
  @Input() usernameboxDisabled!: boolean;
  @Output() openCartEmit = new EventEmitter();
  @Output() logoutEmit = new EventEmitter();
  @Output() openProfileEmit = new EventEmitter();
  @Output() routeLink = new EventEmitter();

  openCart() {
    this.openCartEmit.emit();
  }

  logout() {
    this.logoutEmit.emit();
  }

  openProfile() {
    this.openProfileEmit.emit();
  }

  linkTo(route: string) {
    this.routeLink.emit(route);
  }
}
