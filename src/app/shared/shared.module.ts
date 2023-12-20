import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImagenPipe } from '../pipes/imagen.pipe';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';




@NgModule({
  declarations: [
    MenuComponent,
    ImagenPipe,
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  exports:[
    MenuComponent,
    ImagenPipe,
    BreadcrumbsComponent,
    PrimengModule,
    
  ]
  
})
export class SharedModule { }
