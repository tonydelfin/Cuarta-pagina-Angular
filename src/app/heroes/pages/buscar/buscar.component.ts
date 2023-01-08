import { Component } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Hero } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: []
})
export class BuscarComponent {

  termino: string ="";
  heroes: Hero[] = [];

  heroeSeleccionado: Hero | undefined;

  constructor(private heroesService: HeroesService){}

  buscando(){
    this.heroesService.getSugerenciasHeores(this.termino.trim())
    .subscribe(heroes => this.heroes = heroes);
  }
  opcionSelecionada(event: MatAutocompleteSelectedEvent){
    
    if(!event.option.value){
      this.heroeSeleccionado = undefined;
      return;
    }
     const heroe: Hero = event.option.value;
      this.termino = heroe.superhero;

      this.heroesService.getHeorePorId(heroe.id!)
      .subscribe(heroe=> this.heroeSeleccionado = heroe)

    
    
  }

}
