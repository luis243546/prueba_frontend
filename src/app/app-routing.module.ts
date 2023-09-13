import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';
import { RegistrarProductosComponent } from './registrar-productos/registrar-productos.component';

const routes: Routes = [
  {path : "productos" , component:ProductoComponent},
  {path : '' , redirectTo: 'productos' , pathMatch : 'full'},
  {path : 'registrar-producto' , component:RegistrarProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
