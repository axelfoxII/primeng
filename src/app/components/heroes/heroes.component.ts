import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroes,Publisher } from '../interfaces/heroes.interface';
import { MenuItem} from 'primeng/api'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  items: MenuItem[] =[];
  heroes:Heroes[]=[];

  publishers:any=[];

  hero:Heroes={

    id:'',
    superhero:'',
    alter_ego:'',
    characters:'',
    first_appearance:'',
    publisher:Publisher.DCComics,
    description:'',
    alt_img:''

  }

  constructor(private heroesSvc:HeroesService, private cdr: ChangeDetectorRef){}
  
  
  
  ngOnInit() {
    
    this.heroesSvc.heroes().subscribe(res=>{
      this.heroes= res;
    })

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
    

  }



  heroeById(id:string){

    this.heroesSvc.heroeById(id).subscribe(res=>{

      console.log(res);


    })

  }

  eliminarHeroe(id:any){

    Swal.fire({
      icon:'question',
      title: 'Desea eliminar el heroe?',
      showCancelButton:true,
      confirmButtonText:'Eliminar'

    }).then((result)=>{
    
      if (result.isConfirmed) {

        this.heroesSvc.eliminarHeroe(id).subscribe(res=>{

          Swal.fire({
            icon:'success',
            title:'El heroe se elimino correctamente',
            confirmButtonText:'Aceptar'
          }).then((result)=>{
            location.reload();
          })

        })
        
      }


    })


  }


 visible: boolean = false;

showDialog() {
    this.visible = true;
}

handleItemClick(event: any) {
  // Esto se dispara al hacer clic en cualquier elemento del menú
this.showDialog();
  // Puedes realizar acciones comunes aquí si es necesario
}


obtenerHeroe(id:any){

 
  
  this.heroesSvc.heroeById(id).subscribe(res=>{

    this.hero = res;
    this.cdr.detectChanges(); // Forzar la actualización de la vista
    this.showDialog();

  })

}

editarHeroe(){
  this.visible = false;

  const dataArray = [this.hero.publisher]
  const dataArray2:any = Object.entries(dataArray)
  
  let heroeReload ={

    id:this.hero.id,
    superhero:this.hero.superhero,
    alter_ego:this.hero.alter_ego,
    characters:this.hero.characters,
    first_appearance:this.hero.first_appearance,
    publisher:dataArray2[0][1].desc,
    description:this.hero.description,
    alt_img:this.hero.alt_img
    

  }

  
  
this.heroesSvc.actualizarHeroe(heroeReload).subscribe(res=>{
    Swal.fire({
      icon:'success',
      title:'El heroe se actualizo correctamente',
      confirmButtonText:'Aceptar'
    }).then((result)=>{
        
      if(result.value){

        location.reload();

      }

    }) 

  })

}
}
