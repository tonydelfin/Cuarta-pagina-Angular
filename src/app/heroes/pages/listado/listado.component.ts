import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroesServer, Hero } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent implements OnInit{

  heroes: Hero[] = []

  constructor(private heroesService: HeroesService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.heroesService.getHeroes()
      .subscribe(heroe => {
         this.heroes = heroe;
        
      })
    
  }
}
