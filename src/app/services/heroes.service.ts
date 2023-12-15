import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroes } from '../components/interfaces/heroes.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

 

  constructor(private http:HttpClient) {}

  heroes():Observable<Heroes[]>{

    return this.http.get<Heroes[]>('http://localhost:3000/heroes');

  }

  heroeById(id:string):Observable<Heroes>{
    return this.http.get<Heroes>(`http://localhost:3000/heroes/${id}`);

  }


  buscarHero(texto:string):Observable<Heroes>{

    return this.http.get<Heroes>(`http://localhost:3000/heroes?q=${texto}`);

  }


  agregarHeroe(heroe:Heroes):Observable<Heroes>{

    return this.http.post<Heroes>(`http://localhost:3000/heroes`,heroe);

  }

  actualizarHeroe(heroe:Heroes):Observable<Heroes>{

    console.log(heroe)
    return this.http.put<Heroes>(`http://localhost:3000/heroes/${heroe.id}`,heroe);


  }


  eliminarHeroe(id:string):Observable<Heroes>{

    return this.http.delete<Heroes>(`http://localhost:3000/heroes/${id}`);

  }

}
