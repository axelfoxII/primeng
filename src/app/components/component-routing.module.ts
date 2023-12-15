import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroeComponent } from './heroe/heroe.component';
import { PaginacionComponent } from './paginacion/paginacion.component';


const routes: Routes = [

  {
    path:'', component:HeroesComponent  
  },
  {
    path:'heroe/:id', component:HeroeComponent  
  },
  {
    path:'paginacion', component:PaginacionComponent  
  },

  {
    path:'**', redirectTo:''
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
