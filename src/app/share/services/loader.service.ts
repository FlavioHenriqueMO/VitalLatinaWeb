import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loading = new BehaviorSubject<boolean>(false);
  loadingSub$ : Observable<boolean> = this.loading.asObservable();

  constructor() { }


  hide(): void {
    this.loading.next(false);
    console.log('>>>>>> Loading off!!');
  }
  show(): void {
    this.loading.next(true);
    console.log('>>>>>> Loading On!!!');
  }


}
