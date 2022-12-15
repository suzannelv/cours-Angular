import { Component } from '@angular/core';
import { Animal } from 'src/app/interfaces/animal';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
   colorTS: string = 'red';
   valid: boolean = true;
   animaux: string[]=['chien', 'chat', 'panda'];

   animauxObj: Animal[]=[
    
    {name: 'chien', quantity: 10},
    {name: 'chat', quantity: 4},
    {name: 'panda', quantity: 6}

  ];

   constructor() {
    

   }

}
