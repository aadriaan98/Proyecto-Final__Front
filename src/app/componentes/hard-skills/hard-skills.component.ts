import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.css'],
})
export class HardSkillsComponent implements OnInit {
  skill: Skills[] = [];

  constructor(
    private skillServ: SkillsService,
    private tokenService: TokenService
  ) {}

  isLogged = false;
  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.skillServ.lista().subscribe((data) => {
      this.skill = data;
    });
  }

  borrar(id: number): void {
    if (id != undefined) {
      this.skillServ.delete(id).subscribe(
        (data) => {
          this.cargarSkills();
        },
        (error) => {
          alert('No se pudo borrar');
        }
      );
    }
  }
}
