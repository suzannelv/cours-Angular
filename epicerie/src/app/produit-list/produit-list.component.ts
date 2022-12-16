import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../interfaces/produit';
import { ProduitsService } from '../services/produits.service';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css'],

})
export class ProduitListComponent implements OnInit{

produits : Produit[] = []
error: string = '';

constructor( private _fruits : ProduitsService, private activatedRoute: ActivatedRoute ) {
 

 }

ngOnInit(): void {
  this.produits = this._fruits.readProduits();
  if(this.activatedRoute.snapshot.queryParams['noproduit']){
    this.error = 'ce produit n\' existe pas'
  }
  
 }


}
