import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  theater_id = 0;
  bookings = {};
  tickets = []

  constructor(private _router: Router, private _route: ActivatedRoute) { }

  
}
