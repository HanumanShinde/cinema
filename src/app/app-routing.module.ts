import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './mainpage/footer/footer.component';
import { ViewComponent } from './view/view/view.component';
import { BookingComponent } from './views/booking/booking.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'view/:theater_id/:screen_id',component:ViewComponent},
  {path:'book',component:BookingComponent},
  {path:'home',component:HomepageComponent},
  {path:"**",redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
