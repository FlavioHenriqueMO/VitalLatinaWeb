import { Component, OnInit } from '@angular/core';
import { FormasPagtoService } from './formas-pagto.service';
import { LoaderService } from 'src/app/share/services/loader.service';
import { formaPagto } from 'src/models/formaPagto';

@Component({
  selector: 'app-formas-pagto',
  templateUrl: './formas-pagto.component.html',
  styleUrls: ['./formas-pagto.component.css']
})
export class FormasPagtoComponent implements OnInit {
  titulo = 'Formas de Pagamento';
  dadosFrmPagto : formaPagto[] = [];
  colGrid : string[] = ['descricao', 'ativo',  'action'];
  colHeader : string[] = ['descricao', 'ativo'];


  constructor(private frmPagtoService : FormasPagtoService) {
    this.frmPagtoService.getFormasPagamento().subscribe({
      next: (frmPagto) => { this.dadosFrmPagto = frmPagto;},
      error: (response) => {console.log('response  error => ', response);}
    });

  }

  ngOnInit(): void {
    
  }

}
