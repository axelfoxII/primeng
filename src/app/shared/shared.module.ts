import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImagenPipe } from '../pipes/imagen.pipe';



@NgModule({
  declarations: [
    MenuComponent,
    ImagenPipe
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports:[
    MenuComponent,
    ImagenPipe
    
  ]
  
})
export class SharedModule { }
