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
  }
  show(): void {
    this.loading.next(true);
  }


}
