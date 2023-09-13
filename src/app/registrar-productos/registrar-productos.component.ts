import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-productos',
  templateUrl: './registrar-productos.component.html',
  styleUrls: ['./registrar-productos.component.css']
})
export class RegistrarProductosComponent implements OnInit{


  producto : Producto = new Producto();
  constructor(private productoServicio:ProductoService, private router:Router){}

  ngOnInit(): void {
      
  }


  guardarProducto(){
    this.productoServicio.registrarProducto(this.producto).subscribe(dato =>{
      console.log(dato);
      this.irAlaListaDeProductos();
    },error => console.log(error));
  }

  irAlaListaDeProductos(){
    this.router.navigate(['/productos']);
  }

  onSubmit(){
    this.guardarProducto();
  }
}
