import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PixabayService {

  constructor(private http: HttpClient) { }

  onSearch(param: string): Observable<any>{
    return new Observable(
      observer => {
        this.http.get('https://pixabay.com/api/?key=14868804-f92ed0e61986873238ac11953&q=' + param)
        .subscribe(data =>{
          if (!data){
            observer.error('rien trouvé');
          }
          else {
            observer.next(data);
            observer.complete();
          }
        }
          )
      }
    )
  }
}
