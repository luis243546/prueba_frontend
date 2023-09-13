import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseURL = "http://localhost:8080/producto/listap"

  constructor(private httpClient : HttpClient) { }

  obtenerListaProductos():Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.baseURL}`);
  }

  registrarProducto(producto:Producto):Observable<object>{
    return this.httpClient.post(`${this.baseURL}`, producto);
  }
}
