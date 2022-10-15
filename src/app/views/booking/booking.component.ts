import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  ticket = {
    theater_id: '',
    screen_id: '',
    show_time: '',
    total_seats: '',
    total_amount: ''
  }
  tickets: any[] = [];

  constructor(public _rest: RestService, private _state: StateService) { }


  ngOnInit(): void {
    let tickets = localStorage.getItem('Tickets');
    if (tickets) {
      this.tickets = JSON.parse(tickets)
    }
  }


  add(){
    this._rest.add_ticket(this.ticket).subscribe((data)=>{
      console.log(data);
      alert('Ticket booked');
    },err=>{
      console.log(err);
      alert('Something went wrong')
    })
  };






}
