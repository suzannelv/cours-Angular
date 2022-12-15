import { Component, OnInit } from '@angular/core';
import { Produit } from '../interfaces/produit';
import { ProduitsService } from '../services/produits.service';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css'],
  // providers:[ProduitsService]
})
export class ProduitListComponent implements OnInit{

produits : Produit[] = []
constructor( private _fruits : ProduitsService) {
 

 }

ngOnInit(): void {
  this.produits = this._fruits.produits
  
 }

 deleteProduitEl (i:number) {
  this._fruits.deleteEl(i)
 }
}
