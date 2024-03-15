import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipass } from 'src/app/shared/models/data';
import { PassangerService } from 'src/app/shared/services/passanger.service';

@Component({
  selector: 'app-pass-card',
  templateUrl: './pass-card.component.html',
  styleUrls: ['./pass-card.component.scss']
})
export class PassCardComponent implements OnInit {
@Input() getDatacard ! : Ipass
editMode  !: boolean  
@Output() sendData : EventEmitter<number> = new EventEmitter<number>()


  constructor(private _prassService : PassangerService) { }

  ngOnInit(): void {
  }

  onEdit(obj : string){
    this.editMode = true
       this._prassService.onPassUpdate(this.getDatacard.id, obj)
  }

  onDelete(id : number){
      this._prassService.onRemove(id)
      this.sendData.emit(id)
  }

}
