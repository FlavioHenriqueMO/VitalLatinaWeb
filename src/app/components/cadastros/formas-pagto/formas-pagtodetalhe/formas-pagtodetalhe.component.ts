import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { buttomPlusCfg } from 'src/app/share/buttom-plus/buttom-plus-configModel';
import { FormasPagtoEditViewComponent } from '../formas-pagto-edit-view/formas-pagto-edit-view.component';
import { formaPagto } from 'src/models/formaPagto';

@Component({
  selector: 'app-formas-pagtodetalhe',
  templateUrl: './formas-pagtodetalhe.component.html',
  styleUrls: ['./formas-pagtodetalhe.component.css'],
})
export class FormasPagtodetalheComponent implements OnInit{
  @Input() columnsGrid! : string[];
  @Input() columnsHeader! : string[];
  @Input() dataGrid! : formaPagto[] ;

  private dialogCfg = new MatDialogConfig();
  
  configuraDialog() {
    this.dialogCfg.disableClose = true;
    this.dialogCfg.autoFocus = true;
    this.dialogCfg.height = '250px';
    this.dialogCfg.width  = '600px'; 

  }


  constructor(private _snackbar : MatSnackBar, private dialog: MatDialog){}

  ngOnInit(): void {
    this.configuraDialog();
  }


  cfgBtnPlus(): buttomPlusCfg {
    const cfgBtn =  new buttomPlusCfg();
    cfgBtn.btnEditar.toolTip.descricao = 'Editar';
    cfgBtn.btnVisualizar.toolTip.descricao = 'Visualizar Dados';
    cfgBtn.btnExcluir.toolTip.descricao = 'Eliminar';
    return cfgBtn;
  }
 
  excluirFormaPagto(chave: formaPagto){
    console.log('Forma de pagamento excluida => ', chave);
    this._snackbar.open(`Forma de Pagamento excluida ${chave}`, 'Undo', {
      duration: 3000
    });
  }

  editarFormaPagto(chave: formaPagto){

    this.dialogCfg.data = chave; 

    let dialogFormasPagto = this.dialog.open(FormasPagtoEditViewComponent, this.dialogCfg);
    dialogFormasPagto.afterClosed().subscribe( (result)=> {
      console.log('>>> FormasPagto Detalhe :) => ', result);
    });
  }

  consultarFormaPagto(chave: formaPagto){
    console.log('Forma de pagamento Consultada => ', chave);
    this._snackbar.open(`Forma de Pagamento CONSULTADA ${chave}`, 'Undo', {
      duration: 3000
    });
  }


}
