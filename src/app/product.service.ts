import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from '../../node_modules/rxjs/Observable';
import { ProductMessage } from './shared/product-message';
import { Product } from './shared/product';
//import { ClientHttp2Session, Http2Server, Http2Session } from 'http2';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  
  getProducts(): Observable<Product[]>{
    return this._http.get<Product[]>('https://localhost:5001' + '/product').pipe(retry(1), catchError(this.handleError));
    //return this._http.get<Product[]>('https://localhost:5001' + '/product').map(res => res.json()).catch(catchError(this.handleError));
  }
/*
  getProducts(searchText: string): Observable<Product[]>{
    return this._http.get<Product[]>('https://localhost:5001' + '/product', search).pipe(retry(1), catchError(this.handleError));
    //return this._http.get<Product[]>('https://localhost:5001' + '/product').map(res => res.json()).catch(catchError(this.handleError));
  }
*/
  handleError(error: any){
    console.log('ERROR');
    const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statustext}` : 'Server error';

    console.log(errMsg);
    return Observable.throw;
  }
}
