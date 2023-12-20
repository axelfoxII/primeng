import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { BreadcrumbModule } from 'primeng/breadcrumb';



@NgModule({
  declarations: [],
  exports: [

  MenubarModule,
  ButtonModule,
  CardModule,
  FieldsetModule,
  PanelModule,
  ToolbarModule,
  TableModule,
  BadgeModule,
  AutoCompleteModule,
  DialogModule, 
  InputTextModule,
  DropdownModule, 
  SelectButtonModule,
  BreadcrumbModule
  
  ]
})
export class PrimengModule { }
