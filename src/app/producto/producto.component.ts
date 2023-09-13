import { Component } from '@angular/core';
import { Producto } from '../producto';
import { OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit{
  
  productos : Producto[];

  constructor(private productoServicio:ProductoService){}

  ngOnInit(): void{
    this.obtenerProductos();
  }

  private obtenerProductos(){
    this.productoServicio.obtenerListaProductos().subscribe(dato =>{
      this.productos = dato;
    });

  }

}
