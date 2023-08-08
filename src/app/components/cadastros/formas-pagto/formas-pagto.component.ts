import { Component, OnInit } from '@angular/core';
import { FormasPagtoService } from './formas-pagto.service';
import { LoaderService } from 'src/app/share/services/loader.service';

@Component({
  selector: 'app-formas-pagto',
  templateUrl: './formas-pagto.component.html',
  styleUrls: ['./formas-pagto.component.css']
})
export class FormasPagtoComponent implements OnInit {
  titulo = 'Formas de Pagamento';
  dadosFrmPagto : any = [];
  colGrid : string[] = ['descricao', 'ativo', 'id', 'action'];
  colHeader : string[] = ['descricao', 'ativo', 'id'];


  constructor(private frmPagtoService : FormasPagtoService) {
    this.frmPagtoService.getFormasPagamento().subscribe({
      next: (frmPagto) => { console.log('retorno api => ', frmPagto); 
                            this.dadosFrmPagto = frmPagto;},
      error: (response) => {console.log('response  error => ', response);}
    });

  }

  ngOnInit(): void {
  }

}
