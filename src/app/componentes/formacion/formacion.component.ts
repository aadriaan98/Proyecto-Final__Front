import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {

  ed : Educacion[] = [];

  constructor(private edServ : EducacionService, private tokenService : TokenService) { }
  
  isLogged = false;

  ngOnInit(): void {

    this.cargarEd();

    if(this.tokenService.getToken()){

      this.isLogged = true;

    }else{

      this.isLogged = false;

    }

  }

  cargarEd(): void{

    this.edServ.lista().subscribe(data =>{

      this.ed = data;

    })

  }

  delete(id? : number){
    if(id != undefined){
      this.edServ.delete(id).subscribe(data =>{
        this.cargarEd();
      }, error =>{
        alert("Error al eliminar");
      })
    }
  }
  

}
