import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { AssetsComponent } from './components/assets/assets.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { AnimauxService } from './services/animaux.service';
import { ServicesComponent } from './components/services/services.component';
import { ProduitsService } from './services/produits.service';
import { RoutingComponent } from './components/routing/routing.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { AjouterComponent } from './components/ajouter/ajouter.component';
import { ModifierProduitComponent } from './components/modifier-produit/modifier-produit.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProduitCardComponent } from './components/produit-card/produit-card.component';
import { FormsModule } from '@angular/forms';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { FormUpdateComponent } from './components/form-update/form-update.component';
// import { registerLocaleData } from '@angular/common';
// import localeFr from '@angular/common/locales/fr';
// registerLocaleData(localeFr, 'fr');




@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AssetsComponent,
    DirectivesComponent,
    ProduitListComponent,
    PipeComponent,
    ServicesComponent,
    RoutingComponent,
    PageNotFoundComponentComponent,
    AjouterComponent,
    ModifierProduitComponent,
    MenuComponent,
    ProduitCardComponent,
    FormulaireComponent,
    FormUpdateComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AnimauxService, ProduitsService],
  // providers: [{provide: LOCALE_ID, useValue: "fr-FR" }],

  bootstrap: [AppComponent]
})
export class AppModule { }
