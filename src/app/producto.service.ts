import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlBase = 'http://localhost:8080/app-inventario/productos';

  constructor(private clientHttp: HttpClient) { }

  obtenerProductoListar(): Observable<Producto[]> {
    return this.clientHttp.get<Producto[]>(this.urlBase);
  }
  
  agregarproducto(producto:Producto):Observable<Object>{
   return this.clientHttp.post(this.urlBase,producto);
  }
}
