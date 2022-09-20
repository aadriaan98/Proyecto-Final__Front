import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Explaboral } from 'src/app/model/explaboral';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-editar-exp',
  templateUrl: './editar-exp.component.html',
  styleUrls: ['./editar-exp.component.css']
})
export class EditarExpComponent implements OnInit {

  expLab : Explaboral = null;

  constructor(private expServ : ExperienciaService, private activateRoute : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {

    const id = this.activateRoute.snapshot.params['id'];

    this.expServ.detail(id).subscribe(data =>{

      this.expLab = data;

    }, error =>{

      alert("Error al modificar");
      this.router.navigate(['']);

    });
  }

  onUpdate(): void{

    const id = this.activateRoute.snapshot.params['id'];

    this.expServ.update(id, this.expLab).subscribe(data =>{

      this.router.navigate(['']);

    }, error =>{

      alert("Error al modificar");
      this.router.navigate(['']);

    })
  }

}
