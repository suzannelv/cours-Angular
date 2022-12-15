import { Injectable } from '@angular/core';
import { Produit } from '../interfaces/produit';


@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  produits: Produit[] = [
    {name: 'Cerise', img: '/assets/fruits/cerise.jpg', price: 5, stock: 10},
    {name: 'Citron', img: '/assets/fruits/citron.jpg', price: 4, stock: 4},
    {name: 'Fraise', img: '/assets/fruits/fraise.jpg', price: 3, stock: 10},
    {name: 'Poire', img: '/assets/fruits/poire.jpg', price: 2, stock: 5},
    {name: 'Abricot', img: '/assets/fruits/abricot.jpg', price: 2, stock: 4},
  
    {name: 'Mangue', img: '/assets/fruits/mangue.jpg', price: 2, stock: 4},
  
    {name: 'Orange', img: '/assets/fruits/orange.jpg', price: 2, stock: 6},
  
    {name: 'Pastèque', img: '/assets/fruits/pasteque.jpg', price: 2, stock: 8}
  
  
   ]
  constructor() { }
//  ici, on fera une demande ), l'API
   readProduit() {
    return this.produits
   }

   deleteEl (i:number) {
  console.log();
  
    this.produits.splice(i, 1)
   }

}
