import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DoughComponent } from './dough/dough.component';
import { LaptopComponent } from './laptop/laptop.component';

const routes: Routes = [{path:'' , component:HomeComponent},
{
  path:'dough', component:DoughComponent
},
{
  path:'laptop', component: LaptopComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
