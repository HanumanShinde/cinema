import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  theater_id='';
  screen_name='';
  movie_name='';
  poster='';
  movies:any[]=[];
//   movies=[{
//     poster:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjFrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00136643-dggzxauykw-portrait.jpg",
//     movie_name:'Raksha Bandhan',
//     info:'comdy/family'
//   },
// {
//   poster:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-OWsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00108037-kqybquktkh-portrait.jpg",
//     movie_name:'De Dhakka 2',
//     info:'comdy/family'
// },
// {
//   poster:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NDdrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00098735-pluvvdrupz-portrait.jpg",
//     movie_name:'Laal Singh Chadhha',
//     info:'comdy/family'
// },{
//   poster:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NjElICAyMGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00128946-fvrsyqswpt-portrait.jpg",
//     movie_name:'Ek Villain Retuns',
//     info:'comdy/family'
// }]
  constructor(private _router:ActivatedRoute,private _rest:RestService) { }

  ngOnInit(): void {
    this._rest.get_all_info().subscribe((data)=>{
      console.log(data)
    this.movies=(data as any) ['data'];
    console.log(this.movies);
    },(err)=>{
      console.log(err);
    })
  }

  

}
