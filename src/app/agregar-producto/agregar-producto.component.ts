import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';
import { error } from 'console';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent {
 producto: Producto = new Producto();

 constructor(private productoservice: ProductoService, private enrutador: Router ){}

 onSubmit(){
  this.guardarProducto();
 }

 guardarProducto(){
  this.productoservice.agregarproducto(this.producto).subscribe(
    {
      next:(datos) =>{
          this.irListaproductos();
      },
      error:( error: any) =>{console.log(error)}
    }
  );
 }

 irListaproductos(){
this.enrutador.navigate(['/productos']);

 }
}
