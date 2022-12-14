import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-editarskill',
  templateUrl: './editarskill.component.html',
  styleUrls: ['./editarskill.component.css'],
})
export class EditarskillComponent implements OnInit {
  skill: Skills = null;

  constructor(
    private skillServ: SkillsService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillServ.detail(id).subscribe(
      (data) => {
        this.skill = data;
      },
      (error) => {
        alert('Error al modificar');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate() {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillServ.update(id, this.skill).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (error) => {
        alert('Error al modificar');
        this.router.navigate(['']);
      }
    );
  }
}
