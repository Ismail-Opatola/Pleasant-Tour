import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
    
  /**
   * get all tours
   * @returns Observable
   * */ 
  getAllTours(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/tours');
  }

  /**
   * get tour request
   * @param tourId
   * @returns Observable
   * */ 
  getTour(id: string): Observable<any>{
    // using http parameters
    const httpParams = new HttpParams({
      fromObject: {
        id: id,
      }
    });

    const endpoint = `http://localhost:3000/tours`;
    return this.httpClient.get(endpoint, {params: httpParams});
  }

   /**
    * get category req
   * @param category
   * @returns Observable
   * */ 
  getCategory(category: string): Observable<any>{
    const endpoint = `http://localhost:3000/${category}`;
    return this.httpClient.get(endpoint);
  }
  
  /**
   * search request
   * @param query
   * @returns Observable
   * */ 
  search(query: object): Observable<any>{
    const httpParams = new HttpParams({
      fromObject: {
        ...query
      }
    });
    
    const endpoint = `http://localhost:3000/tours`;
    return this.httpClient.get(endpoint, {params: httpParams});
  }

  /**
   * post booking form
   * @param formData
   * @returns Observable
   * */ 
  postBooking(formdata: object): Observable<any> {
    const endpoint = `http://localhost:3000/bookings`;
    return this.httpClient.post(endpoint, formdata);
  }
}
