import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: 'about.component.html',
})
export class AboutComponent  {
    header_title: string;

    constructor(){
      this.header_title = "This is an about page!"
    }
    
 }
