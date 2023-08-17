import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { buttomPlusCfg } from 'src/app/share/buttom-plus/buttom-plus-configModel';
import { FormasPagtoEditViewComponent } from '../formas-pagto-edit-view/formas-pagto-edit-view.component';

@Component({
  selector: 'app-formas-pagtodetalhe',
  templateUrl: './formas-pagtodetalhe.component.html',
  styleUrls: ['./formas-pagtodetalhe.component.css'],
})
export class FormasPagtodetalheComponent implements OnInit{
  @Input() columnsGrid! : string[];
  @Input() columnsHeader! : string[];
  @Input() dataGrid : any ;


  constructor(private _snackbar : MatSnackBar, private dialog: MatDialog){}

  ngOnInit(): void {
  }


  cfgBtnPlus(): buttomPlusCfg {
    const cfgBtn =  new buttomPlusCfg();
    cfgBtn.btnEditar.toolTip.descricao = 'Editar';
    cfgBtn.btnVisualizar.toolTip.descricao = 'Visualizar Dados';
    cfgBtn.btnExcluir.toolTip.descricao = 'Eliminar';
    return cfgBtn;
  }
 
  excluirFormaPagto(chave:string){
    console.log('Forma de pagamento excluida => ', chave);
    this._snackbar.open(`Forma de Pagamento excluida ${chave}`, 'Undo', {
      duration: 3000
    });
  }

  editarFormaPagto(chave:string){
    console.log('Forma de pagamento editada => ', chave);
    // this._snackbar.open(`Forma de Pagamento EDITADA ${chave}`, 'Undo', {
    //   duration: 3000
    // });

    let dialogFormasPagto = this.dialog.open(FormasPagtoEditViewComponent, { height:'250px', width:'600px'})


  }

  consultarFormaPagto(chave:string){
    console.log('Forma de pagamento Consultada => ', chave);
    this._snackbar.open(`Forma de Pagamento CONSULTADA ${chave}`, 'Undo', {
      duration: 3000
    });
  }


}
