import { Component, OnInit } from '@angular/core';
import { Ipass } from 'src/app/shared/models/data';
import { PassangerService } from 'src/app/shared/services/passanger.service';

@Component({
  selector: 'app-pass-dashboard',
  templateUrl: './pass-dashboard.component.html',
  styleUrls: ['./pass-dashboard.component.scss']
})
export class PassDashboardComponent implements OnInit {
  passangerArr ! : Ipass[]
  checkNumberAll ! : number
  allArrNumber ! : Ipass[]
  constructor(private _passService : PassangerService) { }

  ngOnInit(): void {
    this.passangerArr= this._passService.getAllData()
  }

  onRemove(id : number){
    this._passService.onRemove(id)
    this.allArrNumber = this.passangerArr.filter((ele : Ipass)=>{
        return ele.checkedIn
    })
    this.checkNumberAll = this.allArrNumber.length
  }

}
