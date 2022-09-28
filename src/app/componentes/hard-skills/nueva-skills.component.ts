import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-nueva-skills',
  templateUrl: './nueva-skills.component.html',
  styleUrls: ['./nueva-skills.component.css']
})
export class NuevaSkillsComponent implements OnInit {

  nombreS: string;
  porcentajeS: number;
  constructor(private skillServ : SkillsService, private router : Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Skills(this.nombreS, this.porcentajeS);
    this.skillServ.save(skill).subscribe(data =>{
      alert("Skill creada correctamente");
      this.router.navigate(['']);
    }, error =>{
      alert("Error al añadir");
      this.router.navigate(['']);
    })
  }

}
