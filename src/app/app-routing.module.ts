import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';

const app_routes: Routes = [
  { path: '', component: PortafolioComponent},
  { path: 'home', component: PortafolioComponent},
  { path: 'projects', component: ProjectsComponent},
  // { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', pathMatch: 'full', redirectTo: ''}
];


@NgModule({
  imports:[
    RouterModule.forRoot(app_routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{

}