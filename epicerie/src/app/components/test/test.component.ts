import { Component, createPlatform } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
   title:string = 'Mon application';
   price:number = 10;

   total:number =4;
   more:boolean = false;

   constructor(){
    console.log(this.title);
    if (this.total > 3) this.more = true;
   }


   ttc = (prix:number) => prix * 1.2
   

   loadMore () {
     console.log('acheter');
     
   }

   
}
