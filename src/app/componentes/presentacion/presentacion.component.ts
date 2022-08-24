import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { personaService } from "src/app/service/personaService";

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  persona : persona = new persona("", "", "");

  constructor(public personaService : personaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data =>{
      this.persona = data;
    })
  }

}
