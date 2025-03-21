import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { salesdata } from './model/salesdata';
import { productdata } from './model/produts';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  loadProducts(){
    return this.http.get<productdata[]>("http://localhost:3000/products")
  }

  loadsalesdata(){
    return this.http.get<salesdata[]>("http://localhost:3000/sales")
  }
}
