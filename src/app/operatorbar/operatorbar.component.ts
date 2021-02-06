import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-operatorbar',
  templateUrl: './operatorbar.component.html',
  styleUrls: ['./operatorbar.component.css']
})
export class OperatorbarComponent implements OnInit {

  //@Input() user:string = "";
  //@Input() oz:string = "";
  @Output() user=new EventEmitter<string>();

  username:string = "";
  password:string = "";
  
  loginErrorState:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  userr(par:string):void{
    this.username=par;
  }

  passs(par:string):void{
    this.password=par;
  }

  setUser():void{
    if(this.username == "" || this.password == ""){
      this.loginErrorState == true;
    }
    else{
      this.user.emit("OZ");
    }
  }

  showError():boolean{
    return this.loginErrorState;
  }
}
