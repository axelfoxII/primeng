import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentRoutingModule } from './component-routing.module';
import { PrimengModule } from '../primeng/primeng.module';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroeComponent } from './heroe/heroe.component';
import { PaginacionComponent } from './paginacion/paginacion.component';
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        HeroesComponent,
        HeroeComponent,
        PaginacionComponent,
    ],
    imports: [
        CommonModule,
        ComponentRoutingModule,
        PrimengModule,
        SharedModule,
        FormsModule
    ]
})
export class ComponentsModule { }
