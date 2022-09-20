import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Explaboral } from 'src/app/model/explaboral';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { ExpLaboralComponent } from './exp-laboral.component';

@Component({
  selector: 'app-nueva-exp',
  templateUrl: './nueva-exp.component.html',
  styleUrls: ['./nueva-exp.component.css']
})
export class NuevaExpComponent implements OnInit {

  nombreExp : string = '';
  descripcionExp : string = '';

  constructor(private expServ : ExperienciaService, private router : Router) { }

  ngOnInit(): void {

  }

  onCreate(): void{

    const newExp = new Explaboral(this.nombreExp, this.descripcionExp);

    this.expServ.save(newExp).subscribe(data =>{

      alert("experiencia añadida");
      this.router.navigate(['']);

    },error =>{

      alert("Falló la carga");
      this.router.navigate(['']);
      
    })
  }

}
