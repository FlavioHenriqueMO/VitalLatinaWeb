import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, finalize, tap } from 'rxjs';
import { LoaderService } from './share/services/loader.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private totalRequest = 0;

  constructor(private loadingService: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.totalRequest++;

    this.loadingService.show();

    return next.handle(request).pipe(
      finalize( () => {
        this.totalRequest--;
        if (this.totalRequest == 0){
           this.loadingService.hide();
        }
      })
    );
  }
}
