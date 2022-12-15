import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterComponent } from './components/ajouter/ajouter.component';
import { ModifierProduitComponent } from './components/modifier-produit/modifier-produit.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
// import { RoutingComponent } from './components/routing/routing.component';
import { ProduitListComponent } from './produit-list/produit-list.component';


const routes: Routes = [
  // {path: 'routing', component: RoutingComponent},
  {path: 'ajouter', component: AjouterComponent},
  {path: 'produits/:numero', component: ModifierProduitComponent},
  {path: 'produits', component: ProduitListComponent},
  {path: '', redirectTo: '/produits', pathMatch:'full'},
  {path: '**', component: PageNotFoundComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
