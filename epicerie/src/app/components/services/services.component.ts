import { Component } from '@angular/core';
import { AnimauxService } from 'src/app/services/animaux.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
constructor(private _animaux : AnimauxService){
  
}
getPropriete:string = this._animaux.testPropiete;

getmethod():string {
  return this._animaux.testMethod();

}
}
