import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  theater_id = 0;
  screen_id = '';
  screen_name = '';
  movie_name = '';
  total_seats = '';
  booked_seats = '';
  tickets: any[] = [];
  constructor(private _router: ActivatedRoute, public _rest: RestService,private _route:ActivatedRoute) { }

  ngOnInit(): void {
    // this._rest.get_all_info().subscribe((data)=>{
    //   console.log(data)
    // this.tickets=(data as any) ['data'];
    // console.log(this.tickets);
    // },(err)=>{
    //   console.log(err);
    // })
    this.get_seats();
  }
  

  get_seats(){
    this._route.params.subscribe(data=>{
      this.theater_id=data['theater_id'];
      this._rest.get_seats(this.theater_id).subscribe(data=>{
        console.log(data);
        this.tickets=(data as any) ['data'];
        console.log(this.tickets);
      },err=>{
        console.log(err);
      });
    });

  }




 





}
