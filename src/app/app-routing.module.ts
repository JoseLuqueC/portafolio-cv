import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ItemComponent } from './pages/item/item.component';
import { InfoConocimientoComponent } from './pages/info-conocimiento/info-conocimiento.component';
import { SearchComponent } from './pages/search/search.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { ContactComponent } from './pages/contact/contact.component';

const app_routes: Routes = [
  {path: 'home', component:NoticiasComponent},
  {path: 'projects', component: PortafolioComponent},
  {path: 'admin', component:AdminComponent, canActivate:[AuthGuard]},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'login', component:LoginComponent},
  {path: 'item/:id', component: ItemComponent},
  {path: 'info/:id', component: InfoConocimientoComponent},
  {path: 'search/:termino', component: SearchComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports:[
    RouterModule.forRoot(app_routes, {useHash: true})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{}