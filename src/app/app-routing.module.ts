import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';


const routes: Routes = [
  { path : '', redirectTo : 'home', pathMatch : 'full' },
  { path : 'home', component : HomeComponent ,
  children : [
    { path : 'template', component : TemplateComponent },
    { path : 'reactive', component : ReactiveComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
