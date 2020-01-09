import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PremierComponent } from './premier/premier.component';
import { BindingComponent } from './binding/binding.component';

//définir les routes de mon projet
const routes: Routes = [
  //définition des routes
{path: 'premier', component: PremierComponent},
{path: 'binding', component: BindingComponent},
//déclaration de la route par défaut
{
  path: '',
  redirectTo: '/binding',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }