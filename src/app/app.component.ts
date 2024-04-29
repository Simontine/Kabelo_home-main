import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';
//import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
/* import { DatePipe } from '@angular/common';
import { room } from './room';
import { getLocaleDateTimeFormat } from '@angular/common'; */


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'smart_home';
  rooms?:any;
  list?:any;
  date:any;

  constructor(private Data:DataServiceService){}
  ngOnInit(){
    this.date=Date.now();
   this.Data.getReadings().subscribe((val:any)=>{
      this.list=val;
     // console.log("val: ",typeof val);
      this.rooms=Object.values(this.list);
      // console.log(Object.values(this.rooms));
      
    }); 
  }
}
