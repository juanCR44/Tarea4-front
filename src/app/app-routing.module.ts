import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarViviendaComponent } from './listar-vivienda/listar-vivienda.component';


const routes: Routes = [
  {path:'', redirectTo: 'customer', pathMatch: 'full'},
  {path: 'list', component: ListarViviendaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
