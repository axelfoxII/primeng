import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { Heroes, Publisher } from 'src/app/components/interfaces/heroes.interface';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {
  
  
  publishers:any=[];

  heroe:Heroes={

    superhero:'',
    alter_ego:'',
    characters:'',
    first_appearance:'',
    publisher:Publisher.DCComics,
    description:'',
    alt_img:''

  }
  
  superHeroe:any={};
  heroesComplete: Heroes[] =[];
  formGroup: FormGroup;
   
  menuItems: MenuItem[] = [];


  filteredHeroes!: Heroes[];

    constructor(private heroeSvc: HeroesService, private router:Router) {
      
    this.formGroup = new FormGroup({
      selectedHero: new FormControl<object | null>(null)
  });

    }

  ngOnInit() {

    this.publishers=[
      {
      id:'DC Comics',
      desc:'DC-Comics'
      },
      {
        id:'Marvel Comics',
        desc:'Marvel-Comics'
      }
    ]
   
    this.menuItems = [
        {
            label: 'Heroes',
            icon: 'pi pi-users',
            items:[
              {
                label: 'Agregar Heroes',
                icon: 'pi pi-user-plus',
                command: () => this.handleItemClick('Inicio')
              },
              
            ]
            
        },

        {
          label: 'Paginacion',
          icon: 'pi pi-filter-fill',
          routerLink: 'paginacion'
          
          
      },


        
    ];


    this.heroeSvc.heroes().subscribe(res=>{

      this.heroesComplete =res;
      

    })


}

filterHero(event: AutoCompleteCompleteEvent) {
  let filtered: any[] = [];
  let query = event.query;

  for (let i = 0; i < (this.heroesComplete as any[]).length; i++) {
      let hero = (this.heroesComplete as any[])[i];
      if (hero.superhero.toLowerCase().indexOf(query.toLowerCase()) == 0) {
          filtered.push(hero);
      }
  }

  this.filteredHeroes = filtered;
}


buscarHeroe(termino:Heroes){

  console.log(termino)
this.router.navigateByUrl(`heroe/${termino.id}`);

this.formGroup.reset();

}



/* DIALOG */
visible: boolean = false;

showDialog() {
    this.visible = true;
}

handleItemClick(event: any) {
  // Esto se dispara al hacer clic en cualquier elemento del menú
this.showDialog();
  // Puedes realizar acciones comunes aquí si es necesario
}

guardar(){

  const dataArray = [this.heroe.publisher]
  const dataArray2:any = Object.entries(dataArray)
  
  let heroeReload ={

    superhero:this.heroe.superhero,
    alter_ego:this.heroe.alter_ego,
    characters:this.heroe.characters,
    first_appearance:this.heroe.first_appearance,
    publisher:dataArray2[0][1].desc,
    description:this.heroe.description,
    alt_img:this.heroe.alt_img
    

  }


  this.heroeSvc.agregarHeroe(heroeReload).subscribe(res=>{

    this.visible = false;
   
    if (res) {

      Swal.fire({
        icon:'success',
        title:'EXITO',
        text:'Se subio correctamente',
        confirmButtonText:'ACEPTAR'  
       }).then((result)=>{
    
        if (result.value) {
          location.reload();
        }
    
       })
      
    }else{

      Swal.fire({
        icon:'error',
        title:'ERROR',
        text:'No se subio revise los datos'
       })

    }

  

  })

  



}



}
