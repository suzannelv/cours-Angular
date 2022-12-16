import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/interfaces/produit';
import { ProduitsService } from 'src/app/services/produits.service';



@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.css']
})
export class ModifierProduitComponent {
  
   id: number=this.activeRoute.snapshot.params['numero']
   produit : Produit = this.listProduit.readProduit(this.id)
  
    constructor(
      private activeRoute: ActivatedRoute, 
      private listProduit: ProduitsService, 
      private router: Router) {

      console.log(this.activeRoute.snapshot.params['numero']);
      if (!this.produit){
        this.router.navigate(['produits'], {queryParams: {produit:true}});
      }

      // this.produits = this.listProduit.produits
      // console.log(this.produits[this.id].name);

   
    } 
  
    ngOnInit(): void {
      
      
      
    }
}
