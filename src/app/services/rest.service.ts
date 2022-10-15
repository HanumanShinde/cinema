import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private _http: HttpClient, private _state: StateService) { }


  add_ticket(data: any) {
    return this._http.post(environment.url + '/add_ticket', data);
  }

  get_seats(theater_id: number) {
    return this._http.get(environment.url + '/check_booked_seats/' + theater_id)
  }

  get_all_info() {
    return this._http.get(environment.url + '/get_all_info');
  }



}
