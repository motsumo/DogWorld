import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedsListComponent } from './shared/breeds-list/breeds-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/breeds-list', pathMatch: 'full' },
  { path: 'breeds-list', component: BreedsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
