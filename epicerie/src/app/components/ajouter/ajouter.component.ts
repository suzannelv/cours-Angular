import { Component } from '@angular/core';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent {
  produitReceive: string;
  onUpdate(info: string = 'épuisé') {
    this.produitReceive = info;
  }
}
