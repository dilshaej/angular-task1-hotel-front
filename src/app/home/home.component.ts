import { Component, OnInit } from '@angular/core';
import { hotelModel } from '../hotel.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
allHotels:hotelModel[]= []
searchKey : string = ""
p: number = 1; 
constructor(private api:ApiService){}

ngOnInit(): void {
  this.getAllHotels()
}
getAllHotels(){
  this.api.getAllHotelAPI().subscribe((result:any)=>{
    this.allHotels = result
    console.log(this.allHotels);
    
  })
}
remove(id:any){
  this.api.removeHotelAPI(id).subscribe((result:any)=>{
    this.getAllHotels()
  })
  }

}
