import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menuheader',
  templateUrl: './menuheader.component.html',
  styleUrls: ['./menuheader.component.css']
})
export class MenuheaderComponent {
  @Input() TituloMenu : string = ''; 
  
}
