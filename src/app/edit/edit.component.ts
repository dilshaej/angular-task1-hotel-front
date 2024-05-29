import { Component, OnInit } from '@angular/core';
import { hotelModel } from '../hotel.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  hotel:hotelModel = {}
  constructor(private route:ActivatedRoute, private api:ApiService, private router:Router){}

  ngOnInit(): void {
    this.route.params.subscribe((result:any)=>{
      console.log(result);
      const {id} = result
      console.log(id);
      this.getHotelDetails(id)
      
      
    })
  }

getHotelDetails(id:any){
this.api.getAHotelAPI(id).subscribe((result:any)=>{
  this.hotel = result
  console.log(this.hotel);
  
})
}
update(){
  this.api.updateHotelAPI(this.hotel).subscribe((result:any)=>{
    alert("Hotel Details Updated")
    this.router.navigateByUrl('')
  })
}
cancel(id:any){
this.getHotelDetails(id)
}

}
