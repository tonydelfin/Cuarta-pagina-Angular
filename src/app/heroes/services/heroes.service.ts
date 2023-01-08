import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroesServer, Hero } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { } 

  getHeroes(): Observable<Hero[]>
  {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }
  getHeorePorId(id: string): Observable<Hero>{
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`)
  }

  getSugerenciasHeores(termino: string): Observable<Hero[]>
  {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${termino}&_limit=6`);
  }
  agregarHeore(heroe: Hero): Observable<Hero>{
    return this.http.post<Hero>(`${this.baseUrl}/heroes`, heroe)
  }

  actualizarHeore(heroe: Hero): Observable<Hero>{
    return this.http.put<Hero>(`${this.baseUrl}/heroes/${heroe.id}`, heroe)
  }
  eliminarHeore(id: string): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/heroes/${id}`);
  }
}
