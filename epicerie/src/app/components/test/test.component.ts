import { Component, createPlatform } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
   title = 'Mon application';
   price = 10;
   constructor(){
   console.log(this.title);
   
   
   }
   ttc (prix:number) {  
    return prix * 1.2
   }

   
}
