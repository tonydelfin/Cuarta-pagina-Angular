import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  
})
export class ConfirmarComponent {

  constructor(private dialogoRef: MatDialogRef<ConfirmarComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Hero,

              ){}

  borrar(){
    this.dialogoRef.close(true);
  
  }
  cerrar(){
    this.dialogoRef.close();

  }
}
