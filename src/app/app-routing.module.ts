import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SliderComponent } from './slider/slider.component';
import { ModalComponent } from './modal/modal.component';

const routes: Routes = [
  {path: '',redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio',component:InicioComponent},
  {path: 'graduacao',component:SliderComponent},
  {path: 'posgraduacao',component:SliderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
