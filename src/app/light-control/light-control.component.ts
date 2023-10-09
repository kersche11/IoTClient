import { Component, OnInit } from '@angular/core';
import { ILight } from '../shared/Models/Light';
import { LightControlService } from './light-control.service';

@Component({
  selector: 'app-light-control',
  templateUrl: './light-control.component.html',
  styleUrls: ['./light-control.component.scss']
})
export class LightControlComponent implements OnInit{
  lights:ILight[]=[];
  

  constructor(private lightService:LightControlService){}

  ngOnInit(): void {

   this.GetLights();
          
      
  }

  GetLights()
  {   
    for (let index = 5; index < 15; index++) {

      this.lightService.getLights(index).subscribe({
        next: response => {this.lights[index-5]=response;
          this.lights[index-5].Id=index;
        },
        error: error => console.log(error),
        })    
  }
  }

  OnSwitchAllOn(){
    for (let index = 5; index < 15; index++) {

      this.lightService.setLights(index, true);
      
}
this.GetLights();
  }
  OnSwitchAllOff(){
    for (let index = 5; index < 15; index++) {

      this.lightService.setLights(index, false);
     
}
this.GetLights();
  }
}
