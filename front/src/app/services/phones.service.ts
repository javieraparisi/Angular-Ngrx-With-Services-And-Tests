import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Phone } from '../models/phone';

@Injectable()
export class PhonesService {

  constructor(private http: Http) { }

  getPhones(): Observable<Phone[]> {
    return this.http.get('http://localhost:3000/phones').map(response => response.json());
  }

}
