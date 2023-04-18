import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterStaggerComponent } from './filter-stagger/filter-stagger.component';
import { InsertRemoveComponent } from './insert-remove/insert-remove.component';
import { OpenCloseComponent } from './open-close/open-close.component';

const routes: Routes = [
  { path: 'open-close', component: OpenCloseComponent },
  { path: 'insert-remove', component: InsertRemoveComponent },
  { path: 'filter-stagger', component: FilterStaggerComponent },
  { path: '**', component: OpenCloseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
