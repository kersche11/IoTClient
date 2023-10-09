import { Component, Input, OnInit } from '@angular/core';
import { ILight } from 'src/app/shared/Models/Light';
import { LightControlService } from '../light-control.service';

@Component({
  selector: 'app-light-control-item',
  templateUrl: './light-control-item.component.html',
  styleUrls: ['./light-control-item.component.scss']
})
export class LightControlItemComponent implements OnInit{

 @Input() light? : ILight;
  
 

 constructor(private lightService:LightControlService){
  
  let a : boolean;

 }


 ngOnInit(): void {
  console.log(this.light)
}


OnSwitch(){
  if (this.light && this.light.state && this.light.state.on !== undefined) {
    this.light.state.on = !this.light.state.on;
  }
  this.SetLight();
}

OnBrightness(value:Event){
  if (this.light && this.light.state && this.light.state.bri !== undefined) {
    this.light.state.bri = parseInt((value.target as HTMLInputElement).value);
  }
  this.SetLight();
}

OnSaturation(value:Event){
  if (this.light && this.light.state && this.light.state.sat !== undefined) {
    this.light.state.sat = parseInt((value.target as HTMLInputElement).value);
  }
  this.SetLight();
}

OnHue(value:Event){
  if (this.light && this.light.state && this.light.state.hue !== undefined) {
    this.light.state.hue = parseInt((value.target as HTMLInputElement).value);
  }
  this.SetLight();
}

SetLight(){
  this.lightService.setLights(this.light?.Id,this.light?.state.on,this.light?.state.bri,this.light?.state.sat,this.light?.state.hue);
}



}

   








