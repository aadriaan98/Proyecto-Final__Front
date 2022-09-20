import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';
import { BodyComponent } from './componentes/body/body.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { HardSkillsComponent } from './componentes/hard-skills/hard-skills.component';
import { SoftSkillsComponent } from './componentes/soft-skills/soft-skills.component';
import { FormacionComponent } from './componentes/formacion/formacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { HomeComponent } from './componentes/home/home.component';
import { interceptorProvider } from './service/interceptor-service';
import { FormsModule } from '@angular/forms';
import { ExpLaboralComponent } from './componentes/exp-laboral/exp-laboral.component';
import { NuevaExpComponent } from './componentes/exp-laboral/nueva-exp.component';
import { EditarExpComponent } from './componentes/exp-laboral/editar-exp.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavegacionComponent,
    PresentacionComponent,
    BodyComponent,
    SobreMiComponent,
    HardSkillsComponent,
    SoftSkillsComponent,
    FormacionComponent,
    ProyectosComponent,
    FooterComponent,
    IniciarSesionComponent,
    HomeComponent,
    ExpLaboralComponent,
    NuevaExpComponent,
    EditarExpComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
