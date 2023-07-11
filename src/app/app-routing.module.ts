import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgregarComponent } from './utl/agregar/agregar.component';
import { AlumnosComponent } from './utl/alumnos/alumnos.component';
import { EditarComponent } from './utl/editar/editar.component';

const routes: Routes = [
  {path: '',redirectTo: '/home', pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'Agregar', component: AgregarComponent},
  {path: 'verAlumnos',component: AlumnosComponent },
  {path: 'Editar/:id',component: EditarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
