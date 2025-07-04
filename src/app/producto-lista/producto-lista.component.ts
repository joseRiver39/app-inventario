import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-lista.component.html',
 styleUrls: ['./producto-lista.component.css']
})
export class ProductoListaComponent implements OnInit {
  producto: Producto[] = [];

  constructor(private productoService: ProductoService, 
              private enrutador: Router) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.productoService.obtenerProductoListar().subscribe(datos => {
      this.producto = datos;
    });
  }

  EditarProducto(id:number){
    this.enrutador.navigate(['editar-producto',id]);
  }
}
