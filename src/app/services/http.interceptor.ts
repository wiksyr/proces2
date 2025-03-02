import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Injectable()
export class HttpTimeoutInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Set timeout duration in milliseconds (e.g., 30000 = 30 seconds)
    const timeoutDuration = 60000;

    const clonedRequest = req.clone();

    // Add the timeout to the HTTP request
    return next.handle(clonedRequest).pipe(timeout(timeoutDuration));
  }
}
