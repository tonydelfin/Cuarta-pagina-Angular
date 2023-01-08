import { Component, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import {switchMap} from 'rxjs'
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
      img{
        width: 100%;
        border-radius: 5px; 
      }
    `
  
  ]
})
export class AgregarComponent implements OnInit{

  constructor(private heoreService: HeroesService, 
              private activatedRouter: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar,
              private dialog: MatDialog
              ){}

  ngOnInit(): void {

    if(!this.router.url.includes('editar'))
    {
      return;
    }
    this.activatedRouter.params
    .pipe(
        switchMap(({id})=>this.heoreService.getHeorePorId(id))
    )
    .subscribe(heroe => this.heroe = heroe);
    
    
  }

  heroe: Hero = {
    superhero:"",
    alter_ego:"",
    characters:"",
    first_appearance:"",
    publisher: Publisher.DCComics,
    alt_img:""    
  }

  publicadores =[
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  guardar(){

    if(this.heroe.superhero.trim().length === 0){
      return;
    }
    
    if(this.heroe.id){
      this.heoreService.actualizarHeore(this.heroe)
      .subscribe(heroe=> this.mostrarSnakbar('¡Registro Actualizado!'))
      
    }
    else{
      this.heoreService.agregarHeore(this.heroe)
      .subscribe(heroe => {
        this.router.navigate(['/heroes/editar', heroe.id]);
        this.mostrarSnakbar('¡Registro Creado!')
      })
    }
    
    
  }

  borrar(){

      const dialogo= this.dialog.open(ConfirmarComponent, {
        width:"350px",
        height:"400",
        data: this.heroe,
        
        });

      dialogo.afterClosed()
      .subscribe(
        (resultado) => {
          if(resultado){
            this.heoreService.eliminarHeore(this.heroe.id!)
            .subscribe(resp => {
              this.router.navigate(['/heroes'])
              this.mostrarSnakbar('¡Heroe Eliminado!')
            });
            
          }
          
        }
        
      )

  }
  mostrarSnakbar(mensaje: string): void{
    this.snackBar.open(mensaje, '!ok',{
      duration: 2500    
    });
  }

}
