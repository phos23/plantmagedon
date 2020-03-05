import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
