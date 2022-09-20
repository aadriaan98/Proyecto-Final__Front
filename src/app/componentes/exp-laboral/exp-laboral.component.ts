import { Component, OnInit } from '@angular/core';
import { Explaboral } from 'src/app/model/explaboral';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-exp-laboral',
  templateUrl: './exp-laboral.component.html',
  styleUrls: ['./exp-laboral.component.css']
})
export class ExpLaboralComponent implements OnInit {

  exp : Explaboral[] = [];

  constructor(private expServ : ExperienciaService, private tokenService : TokenService) { }
  
  isLogged = false;

  ngOnInit(): void {
    this.cargarExp();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarExp(): void{
    this.expServ.lista().subscribe(data =>{
      this.exp = data;
    })
  }

  delete(id?: number): void{
    if(id != undefined){
      this.expServ.delete(id).subscribe(data =>{
        this.cargarExp();
      }, error =>{
        alert("Error al borrar experiencia")
      })
    } 
  }

}
