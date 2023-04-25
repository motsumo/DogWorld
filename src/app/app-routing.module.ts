import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedsPageComponent } from './feature/breeds-page/breeds-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/breeds-list', pathMatch: 'full' },
  { path: 'breeds-list', component: BreedsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
