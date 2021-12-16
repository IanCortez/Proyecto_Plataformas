import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, throwError } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  public token: string; 

  constructor(
    private http: HttpClient
  ) { }

  loginAdmin(data: any): Observable<any>{
        return this.http.post(`${baseUrl}user_admin/login`, data).pipe(
        )
  }

  postAdmin(data: any): Observable<any>{
        return this.http.post(`${baseUrl}user_admin/sign-up`, data).pipe(
        )
  }

  getResId(): Observable<any>{
        return this.http.get(`${baseUrl}user_admin/resId`).pipe(
        )
  }

  postRestaurant(data: any): Observable<any>{
        return this.http.post(`${baseUrl}restaurants`, data).pipe(
        )
  }

  getRestaurantData(id:number): Observable<any>{
        return this.http.get(`${baseUrl}restaurants/`+id).pipe(
        )
  }

  getAdmin(): Observable<any> {
        return this.http.get(`${baseUrl}user_admin/permission`).pipe(
        )
  }

  getAdminFull(): Observable<any> {
        return this.http.get(`${baseUrl}user_admin/data`).pipe(
        )
  }

  removeAdmin(): Observable<any> {
        return this.http.delete(`${baseUrl}user_admin/destroy`).pipe(
        )
  }

  setToken(data: string){
    this.token = data;
    window.localStorage['token'] = this.token; 
  }

  getToken(){
    var valor = localStorage.getItem('token');
    return valor; 
  }

}
