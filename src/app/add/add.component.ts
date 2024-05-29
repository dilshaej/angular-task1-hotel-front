import { Component, OnInit } from '@angular/core';
import { hotelModel } from '../hotel.model';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
hotel : hotelModel ={}
allHotels :any = []
constructor(private api:ApiService, private router:Router){}
ngOnInit(): void {
  this.api.getAllHotelAPI().subscribe((result:any)=>{
    // console.log(result);
    this.allHotels = result
  })
}

addHotel(){
  const existingEmployee = this.allHotels.find((item:any)=>item.id==this.hotel.id)
  if(existingEmployee){
    alert("Id Already Exists!!! Use unique id to add hotel")
  }else{
    this.api.saveHotelAPI(this.hotel).subscribe({
      next:(result:any)=>{
        console.log(result);
        alert(`${result.name} has successfully added to DB`)
        this.router.navigateByUrl('')
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
      })
  }
}
cancel(){
  this.hotel = {}
}

}
