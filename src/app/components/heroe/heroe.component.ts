import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroes } from '../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {
  title = 'heroe';
  hero!: Heroes;
  constructor(private heroeSvc: HeroesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(({ id }) => {
      this.heroeSvc.heroeById(id).subscribe(res => {

        this.hero = res;

      })
    });

  }

}
