import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { DeckListComponent }      from './deck-list.component';
import { DeckDetailComponent }    from './deck-detail.component';

import { AuthGuard }              from '../security/auth.guard';

const usersRoutes: Routes = [
  { path: 'decks', component: DeckListComponent, canActivate: [AuthGuard]},
  { path: 'decks/:deck', component: DeckDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DeckRoutingModule { }
