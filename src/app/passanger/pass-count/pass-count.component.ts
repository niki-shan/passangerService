import { Component, Input, OnInit } from '@angular/core';
import { Ipass } from 'src/app/shared/models/data';
import { PassangerService } from 'src/app/shared/services/passanger.service';

@Component({
  selector: 'app-pass-count',
  templateUrl: './pass-count.component.html',
  styleUrls: ['./pass-count.component.scss']
})
export class PassCountComponent implements OnInit {
   @Input() checkNumber ! : number
   @Input() countCheck ! : number
   Allpassanger ! : Ipass[]
  
  constructor(private _passService : PassangerService) { }

  ngOnInit(): void {
   this.Allpassanger = this._passService.getAllData()
   this.checkNumber = this.Allpassanger.filter(obj => obj.checkedIn == true).length

  }

}
