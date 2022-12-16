

import { Component, Output, EventEmitter} from '@angular/core';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {
// name:string = "dupont" 

// onSubmit(animalForm: NgForm) {
//   // console.log(animalForm.value);

// }

@Output() produitEvent = new EventEmitter<string>();
// this.produitEvent.emit(valeur)

onSubmit(produitForm:NgForm) { 
  console.log(produitForm.value)
}

reset(produitForm:NgForm) {
  produitForm.resetForm()
}
}
 