import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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



  constructor(private fb: FormBuilder){
  }
  
  ngOnInit(): void {
    this.createForm(new formaPagto());
  }

  createForm( pgtos : formaPagto) {
    this.frmPagtos = this.fb.group({
      id : [pgtos.id],
      descricao : [pgtos.descricao, [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      ativo : [pgtos.ativo]
    })
  }

  salvarFPagto() {
    console.log('>>>>>>> Dados do Formulario => ', this.frmPagtos.value);
  }

}
