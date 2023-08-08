import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { buttomPlusCfg, toolTipProperty } from './buttom-plus-configModel';

@Component({
  selector: 'app-buttom-plus',
  templateUrl: './buttom-plus.component.html',
  styleUrls: ['./buttom-plus.component.css']
})
export class ButtomPlusComponent implements OnInit  {
  @Input() btns! : buttomPlusCfg;
  
  giraBtn = false;
  toolTipEdit : toolTipProperty = new toolTipProperty();

  ngOnInit(): void {
    this.toolTipEdit = this.btns.btnEditar.toolTip;
  }

  

  btnOnOff(){
    this.giraBtn = !this.giraBtn;
  }


}
