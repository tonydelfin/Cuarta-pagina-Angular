import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',

})
export class HeroeComponent implements OnInit{

  heroe!: Hero;

  constructor(private activatedRoute: ActivatedRoute, 
              private heroesServices: HeroesService,
              private router: Router
              ){}
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.heroesServices.getHeorePorId(id))
      
      )
      .subscribe(heroe => this.heroe = heroe);
  }

  regresar(){
    this.router.navigate(['/heroes/listado'])
  }
  
  

}
