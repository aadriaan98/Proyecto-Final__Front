import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarExpComponent } from './componentes/exp-laboral/editar-exp.component';
import { NuevaExpComponent } from './componentes/exp-laboral/nueva-exp.component';
import { HomeComponent } from './componentes/home/home.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';


const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'iniciar-sesion', component:IniciarSesionComponent },
  { path:'nueva-exp', component:NuevaExpComponent },
  { path:'editar-exp/:id', component:EditarExpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
