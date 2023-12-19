import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroes } from '../interfaces/heroes.interface';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styles: [
  ]
})
export class PaginacionComponent implements OnInit {

  heroes:Heroes[]=[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(private heroeSvc:HeroesService){}
  
  
  ngOnInit() {

    this.heroeSvc.heroes().subscribe(res=>{

      this.heroes=res;
      this.loading = false;
      

    })
    
  }

  clear(table: Table) {
    table.clear();
}

}
