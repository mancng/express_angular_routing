import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LosAngelesComponentComponent } from './los-angeles-component/los-angeles-component.component';
import { SeattleComponentComponent } from './seattle-component/seattle-component.component';
import { SanJoseComponentComponent } from './san-jose-component/san-jose-component.component';
import { DallasComponentComponent } from './dallas-component/dallas-component.component';
import { WashingtonComponentComponent } from './washington-component/washington-component.component';
import { ChicagoComponentComponent } from './chicago-component/chicago-component.component';

const routes: Routes = [
  { path: 'burbank/:id', component: LosAngelesComponentComponent },
  { path: 'seattle/:id', component: SeattleComponentComponent },
  { path: 'sanjose/:id', component: SanJoseComponentComponent },
  { path: 'dallas/:id', component: DallasComponentComponent },
  { path: 'washington/:id', component: WashingtonComponentComponent },
  { path: 'chicago/:id', component: ChicagoComponentComponent },
  { path: '', pathMatch: 'full', redirectTo: '/burbank' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
