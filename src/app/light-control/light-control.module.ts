import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LightControlItemComponent } from './light-control-item/light-control-item.component';
import { LightControlComponent } from './light-control.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    LightControlComponent,
    LightControlItemComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    LightControlComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LightControlModule { }
