import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs';

import { Deck }           from './Deck';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DeckService{
  constructor(private http: Http) { }

  getDecks(user: string): Observable<Deck[]>{
    return this.http.post("/getdecks",{user: user}).map((r:Response) => r.json() as Deck[]);
  }
  newDeck(deckname:string, user: string): Observable<Deck>{
    return this.http.post("/newdeck",{deckname:deckname, owner:user}).map((r:Response)=> r.json());
  }
  getFlashcards(deck: string, user: string){
    return this.http.post("/getflashcards", {user: user, deck: deck}).map((r:Response) => r.json());
  }
}
