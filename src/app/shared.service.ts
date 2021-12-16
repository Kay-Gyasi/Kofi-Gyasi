import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Comments } from './comments';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly apiUrl = "https://portfolioapi20211215203700.azurewebsites.net/api/";

  constructor(private http:HttpClient) { }

  //#region Admin
  GetAdmin(value: any){
    return this.http.get(this.apiUrl+"Admins/GetAdmin/"+value);
  }
  //#endregion

  //#region Categories
  GetCategories():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl+"Categories/GetCategories");
  }
  //#endregion

  //#region Contacts
  GetContact(value:any){
    return this.http.get(this.apiUrl+"Contacts/GetContact/"+value);
  }
  //#endregion

  //#region Projects
  GetProjects():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl+"Projects/GetProjects");
  }
  //#endregion

  //#region Skills
  Skills():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl+"Skills/GetSkills");
  }
  //#endregion

  //#region Interactions
  PostInteraction(info: Comments):Observable<Comments>{
    let headers = new HttpHeaders()
    .set('content-type', 'application/json;charset=UTF-8')
    .set('Access-Control-Allow-Origin', '*');

    const body = JSON.stringify(info);

    const params = new HttpParams()
    .append('name', info.name)
    .append('email', info.email)
    .append('phone', info.phone)
    .append('type', info.type)
    .append('details', info.details); 

    return this.http.post<Comments>(this.apiUrl+"Interactions/PostInteraction/"+info, info, {headers:headers, params: params})
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(() => error.message);
  }
  //#endregion
}
