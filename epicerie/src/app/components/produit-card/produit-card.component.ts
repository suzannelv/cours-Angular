import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/interfaces/produit';
import { ProduitsService } from 'src/app/services/produits.service';



@Component({
  selector: 'app-produit-card',
  templateUrl: './produit-card.component.html',
  styleUrls: ['./produit-card.component.css']
})
export class ProduitCardComponent implements OnInit {
  // recevoir id du parent
// @Input() id ;
// produit : Produit = this.listProduit.readProduit(this.id)
// @Input() fruit: string;
@Input() fruit : Produit;
@Input() i :number;


constructor(private _produits: ProduitsService) {

}
ngOnInit(): void {
  // console.log(this.id);
 
}
deleteProduitEl (i:number) {
  this._produits.deleteEl(i)
 }
}
