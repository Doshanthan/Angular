import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor() { }

  isMinimized:boolean =true;
  
  minimizedToggle(){
    this.isMinimized = !this.isMinimized;
  }
}
