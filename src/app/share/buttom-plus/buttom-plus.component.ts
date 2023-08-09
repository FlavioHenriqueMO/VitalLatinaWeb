import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { buttomPlusCfg, toolTipProperty } from './buttom-plus-configModel';
import { enumbtnToolTipPlus } from './buttom-plus-enum';

@Component({
  selector: 'app-buttom-plus',
  templateUrl: './buttom-plus.component.html',
  styleUrls: ['./buttom-plus.component.css']
})
export class ButtomPlusComponent implements OnInit  {
  @Input() btns! : buttomPlusCfg;
  @Input() chaveConsulta : any;
  @Output() eventoExcluir = new EventEmitter<string>();
  @Output() eventoEditar = new EventEmitter<string>();
  @Output() eventoConsultar = new EventEmitter<string>();

  
  giraBtn = false;
  toolTipEdit : toolTipProperty = new toolTipProperty();
  toolTipExcluir : toolTipProperty = new toolTipProperty();
  toolTipConsultar: toolTipProperty = new toolTipProperty();

  ngOnInit(): void {
    this.defineNomeToolTips();

  }

  acaoExcluir(){
    this.eventoExcluir.emit(this.chaveConsulta);
  }

  acaoEditar(){
    this.eventoEditar.emit(this.chaveConsulta);
  }

  acaoConsultar(){
    this.eventoConsultar.emit(this.chaveConsulta);
  }


  defineNomeToolTips() {
    if (this.btns == undefined || this.btns == null) {
      this.toolTipEdit.descricao = enumbtnToolTipPlus.editar;
      this.toolTipExcluir.descricao = enumbtnToolTipPlus.excluir;
      this.toolTipConsultar.descricao = enumbtnToolTipPlus.consultar;

    }
    else {
      if ( this.btns.btnEditar == undefined || this.btns.btnEditar == null || this.btns.btnEditar.toolTip.descricao == '') 
        this.toolTipEdit.descricao = enumbtnToolTipPlus.editar;
      else
         this.toolTipEdit = this.btns.btnEditar.toolTip;

      if ( this.btns.btnExcluir == undefined || this.btns.btnExcluir == null || this.btns.btnExcluir.toolTip.descricao == '')
         this.toolTipExcluir.descricao = enumbtnToolTipPlus.excluir;
      else
          this.toolTipExcluir = this.btns.btnExcluir.toolTip;

      if ( this.btns.btnVisualizar == undefined || this.btns.btnVisualizar == null || this.btns.btnVisualizar.toolTip.descricao == '')
          this.toolTipConsultar.descricao = enumbtnToolTipPlus.consultar;
       else
           this.toolTipConsultar = this.btns.btnVisualizar.toolTip;
  
           

    }
  }


  btnOnOff(){
    this.giraBtn = !this.giraBtn;
  }


}
