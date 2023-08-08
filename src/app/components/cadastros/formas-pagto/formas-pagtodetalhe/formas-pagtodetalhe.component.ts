import { Component, Input, OnInit } from '@angular/core';
import { buttomPlusCfg } from 'src/app/share/buttom-plus/buttom-plus-configModel';

@Component({
  selector: 'app-formas-pagtodetalhe',
  templateUrl: './formas-pagtodetalhe.component.html',
  styleUrls: ['./formas-pagtodetalhe.component.css']
})
export class FormasPagtodetalheComponent implements OnInit{
  @Input() columnsGrid! : string[];
  @Input() columnsHeader! : string[];
  @Input() dataGrid : any ;

  ngOnInit(): void {
    console.log(' colunas no formulario detalhe => ', this.columnsGrid);
    console.log(' dados no formulario detalhe => ', this.dataGrid);
  }


  cfgBtnPlus(): buttomPlusCfg {
    const cfgBtn =  new buttomPlusCfg();
    cfgBtn.btnEditar.toolTip.descricao = 'Editar';
    return cfgBtn;
  }
}
