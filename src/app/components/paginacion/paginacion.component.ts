import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroes } from '../interfaces/heroes.interface';

@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styles: [
  ]
})
export class PaginacionComponent implements OnInit {

  heroes:Heroes[]=[];

  constructor(private heroeSvc:HeroesService){}
  
  
  ngOnInit() {

    this.heroeSvc.heroes().subscribe(res=>{

      this.heroes=res;

    })
    
  }

}
