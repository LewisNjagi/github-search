import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  UserName?:string
  @Output() searchProf = new EventEmitter<any>();

  constructor(userService:UserService) { }
  getuser1() {
    this.searchProf.emit(this.UserName)
  }

 

  ngOnInit(): void {
  }

}
