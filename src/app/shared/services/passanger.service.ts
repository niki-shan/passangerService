import { Injectable } from '@angular/core';
import { Ipass } from '../models/data';
import { passengerArray } from '../const/data';

@Injectable({
  providedIn: 'root'
})
export class PassangerService {
passArray : Ipass[] = passengerArray
  constructor() { }


  getAllData(){
    return this.passArray
  }

  onPassUpdate(id : number, updateName : string){
        for (const obj of this.passArray) {
          if(obj.id == id){
            obj.fullname = updateName
          }
        }
  }

  onRemove(id : number){
    let getIndex = this.passArray.findIndex(ele => ele.id == id)
    let deleteId = this.passArray.splice(getIndex,1)
  }
}



