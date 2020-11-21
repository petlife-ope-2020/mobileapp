import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultsListPage } from './results-list.page';

const routes: Routes = [
  {
    path: '',
    component: ResultsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultsListPageRoutingModule {}
