import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILight } from '../shared/Models/Light';

@Injectable({
  providedIn: 'root'
})
export class LightControlService {
  baseUrl='http://smarthome4you.duckdns.org:8020/api/yYCQQoXT2kGmr1YBuqCxEosOBL51GDnJ2m-3Zj8e/lights/'
  lights:ILight[]=[];
  constructor(private http:HttpClient) { }

  getLights(index:number){
    
   
  
      return this.http.get<ILight>(this.baseUrl+index)   
    
    
  }

setLights(id?:number,on?:boolean,bri?:number,sat?:number,hue?:number){
  
  const url = `${this.baseUrl+id}/state`; // Replace 'your_light_id' with the actual ID of your light

  if(sat==undefined){sat=0};
  if(hue==undefined){hue=0};
  if(bri==undefined){bri=0};
  const body = { 
   "on": on ,
   "bri":bri,
   "sat": sat,
   "hue":hue
  };
  
  console.log(body);
  return this.http.put<any>(url, body) .subscribe({
   next: data => {
       on = data.on;
   },
   error: error => {
       
       console.error('There was an error!', error);
   }
 });



  
}

}

