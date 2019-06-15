import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders().set('content-type', 'application/json')
      .set('Access-control-Allow-Origin', '*')
      .set('Access-control-Allow-Headers', '*')
}

@Injectable({
  providedIn: 'root'
})
export class LabelService {
baseurl=environment.baseUrl;
  constructor(private http:HttpClient) { }

 public postRequest(url:any,data:any):any{
   return this.http.post(this.baseurl+url,data ,{
    headers: new HttpHeaders().set('token', localStorage.getItem('token'))
   });
 }
 
  public getRequest(url:any):any{
    return this.http.get(this.baseurl+url,{
      headers:new HttpHeaders().set('token',localStorage.getItem('token'))
    });
  }

  public putRequest(url:any,data:any):any{
    console.log(this.baseurl+url,"url")
    return this.http.put(this.baseurl+url,data,{
      headers:new HttpHeaders().set('token',localStorage.getItem('token'))
    });
  }

  public deleteRequest(url:any):any{
    return this.http.delete(this.baseurl+url,{
    headers:new HttpHeaders().set('token',localStorage.getItem('token'))
    })
  }

  getRequestNote(url,trash:boolean,archive:boolean): any {
    return this.http.get(this.baseurl+url+'trash='+trash +'&archive='+archive,{
    headers:new HttpHeaders().set("jwt_Token",localStorage.getItem("token")), 
    observe:'response'});
    }
}
