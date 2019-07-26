import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState} from '../store/app.state';
import {Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {TrelloModel} from '../store/models/trello.model';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
    trello$: TrelloModel;
    trelloSubscription: Subscription;

    constructor(
        private store: Store<AppState>,
    ) {}

    ngOnInit() {
        this.trelloSubscription = this.store.select(store => store.trello).subscribe((trelloState) => this.trello$ = trelloState);
    }

    ngOnDestroy() {
        this.trelloSubscription.unsubscribe();
    }
}
