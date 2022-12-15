import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimauxService {
    testPropiete:string = " propiété fonction"
    testMethod(): string{
      return 'méthode fonctionne'
    }
  constructor() { }
}
