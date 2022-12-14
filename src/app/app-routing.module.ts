import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarExpComponent } from './componentes/exp-laboral/editar-exp.component';
import { NuevaExpComponent } from './componentes/exp-laboral/nueva-exp.component';
import { EditarEdComponent } from './componentes/formacion/editar-ed.component';
import { NuevaEdComponent } from './componentes/formacion/nueva-ed.component';
import { EditarskillComponent } from './componentes/hard-skills/editarskill.component';
import { NuevaskillComponent } from './componentes/hard-skills/nuevaskill.component';
import { HomeComponent } from './componentes/home/home.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';


const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'iniciar-sesion', component:IniciarSesionComponent },
  { path:'nueva-exp', component:NuevaExpComponent },
  { path:'editar-exp/:id', component:EditarExpComponent },
  { path:'nueva-ed', component:NuevaEdComponent },
  { path:'editar-ed/:id', component:EditarEdComponent },
  { path:'nuevaskill', component:NuevaskillComponent },
  { path:'editarskill/:id', component:EditarskillComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
