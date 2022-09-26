import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editar-ed',
  templateUrl: './editar-ed.component.html',
  styleUrls: ['./editar-ed.component.css']
})
export class EditarEdComponent implements OnInit {


  educacion : Educacion = null;

  constructor(private edServ : EducacionService, private activatedRoute : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.edServ.detail(id).subscribe( data => {
      this.educacion = data;
    }, error => {
      alert("error al modificar")
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.edServ.update(id, this.educacion).subscribe( data => {
      this.router.navigate(['']);
    }, error => {
      alert("error al modificar")
      this.router.navigate(['']);
    })
  }

}
