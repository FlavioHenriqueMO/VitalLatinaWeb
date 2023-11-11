import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, delay, first, map, retry } from 'rxjs/operators';
import { enviroment } from 'src/app/settings/enviroment';
import { formaPagto } from 'src/models/formaPagto';

@Injectable({
  providedIn: 'root'
})
export class FormasPagtoService {
  urlApi : string = ''

  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
 

  constructor(private http : HttpClient) {
    this.urlApi = `${enviroment.urlApi}/FormasPagto`;
   }


    headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
  
   requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders({'Content-Type': 'application/json'}), 
  };
  

   getFormasPagamento() : Observable<formaPagto[]> {
     return this.http.get<formaPagto[]>(this.urlApi )
     .pipe(
       first(), // após pegar dados, faço um unsubscribe!
       //delay(5000),
     );
  }

  salvarFormaPagto(frmPgto : formaPagto) {
    return this.http.post<formaPagto>(this.urlApi, frmPgto)
    .pipe(
      first()
    );    
  }

  excluirFormaPagto(frmPgto : formaPagto) {
    return this.http.post<formaPagto>(this.urlApi, frmPgto)
    .pipe(
      first()
    );    
  }


}
