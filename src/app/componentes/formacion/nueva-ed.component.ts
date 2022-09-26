import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-nueva-ed',
  templateUrl: './nueva-ed.component.html',
  styleUrls: ['./nueva-ed.component.css']
})
export class NuevaEdComponent implements OnInit {

  nombreEd : string;
  descripcionEd: string;

  constructor(private edServ : EducacionService, private router : Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    
    let ed = new Educacion(this.nombreEd, this.descripcionEd);

    this.edServ.save(ed).subscribe(data =>{

      alert("educacion añadida");
      this.router.navigate(['']);

    },error => {

      alert("fallo al añadir");
      this.router.navigate(['']);

    })
  }
}
