import { Component, EventEmitter, Input, OnInit, Output, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { formaPagto } from 'src/models/formaPagto';

@Component({
  selector: 'app-formas-pagto-edit-view',
  templateUrl: './formas-pagto-edit-view.component.html',
  styleUrls: ['./formas-pagto-edit-view.component.css']
})
export class FormasPagtoEditViewComponent implements OnInit{
  frmPagtos! : FormGroup;
  titulo = 'Forma de Pagamento';
  labelPosition: 'before' = 'before';
  @Output() salvar = new EventEmitter<formaPagto>();


  constructor(private fb: FormBuilder, 
              private dialogRef : MatDialogRef<formaPagto>, 
              @Inject(MAT_DIALOG_DATA) public data : formaPagto ){
  }
  
  ngOnInit(): void {
    this.createForm(this.data);
  }

  createForm( pgtos : formaPagto) {
    this.frmPagtos = this.fb.group({
      id : [pgtos.id],
      descricao : [pgtos.descricao, [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      ativo : [pgtos.ativo],
      acao  : [pgtos.acao]
    })
  }

  salvarFPagto() {
    this.salvar.emit(this.frmPagtos.value);
    this.cancelarFPagto(this.frmPagtos.value);
  }

  cancelarFPagto( retorno : formaPagto | null) {
    this.dialogRef.close(retorno);

  }


}
