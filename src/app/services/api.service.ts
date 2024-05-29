import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { hotelModel } from '../hotel.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  server_url="https://angular-hotel-server.onrender.com"
  constructor(private http:HttpClient) { }

  saveHotelAPI(hotel:hotelModel) {
   return this.http.post(`${this.server_url}/users`,hotel)
  }

  getAllHotelAPI(){
    return this.http.get(`${this.server_url}/users`)
  }

  getAHotelAPI(id:any){
    return this.http.get(`${this.server_url}/users/${id}`)
 
  }

  updateHotelAPI(hotel:hotelModel){
    return this.http.put(`${this.server_url}/users/${hotel.id}`,hotel)

  }
  removeHotelAPI(id:any){
    return this.http.delete(`${this.server_url}/users/${id}`)

  }
}
