import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Country } from "src/app/core/country.model";

@Injectable()
export class CountryService {


countryUrl = 'assets/data.json';

  constructor(private http: HttpClient) { }


getCountries():Observable<any> {
  return this.http.get(this.countryUrl);
}


private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    this.log(`${operation} failed: ${error.message}`);

    return of(result as T);
  };
}

private log(message: string) {
  console.log(message);
}


}