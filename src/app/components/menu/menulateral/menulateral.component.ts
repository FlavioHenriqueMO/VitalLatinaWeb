import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menulateral',
  templateUrl: './menulateral.component.html',
  styleUrls: ['./menulateral.component.css']
})
export class MenulateralComponent {
  @Input() TituloMenu = '';

}
