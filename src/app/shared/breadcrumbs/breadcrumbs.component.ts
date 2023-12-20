import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit {
  
  @Input({ required: true }) titulo!: string;
  
  items: MenuItem[]=[];

  home: MenuItem;
  

  constructor(){
    this.home = { icon: 'pi pi-home', routerLink: '/' };

  }
  ngOnInit(): void {
    this.items = [{ label: this.titulo }];

   
  }

}
