import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagenPipe',
  pure: false
})
export class ImagenPipePipe implements PipeTransform {

  transform(heroe: Hero): string {
    if( !heroe.id && !heroe.alt_img){
      return 'assets/no-image.png';
    }
    else if( heroe.alt_img){
      return heroe.alt_img;
    }
    else{
      return `assets/heroes/${heroe.id}.jpg`;
    }
  }

}
