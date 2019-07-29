import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule, MatProgressSpinnerModule, MatSelectModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

import { environment } from '../environments/environment';

import {TrelloService} from './services/trello.service';

import {BoardEffect} from './store/effects/board.effect';
import {CardEffect} from './store/effects/card.effect';
import {LabelEffect} from './store/effects/label.effect';
import {ListEffect} from './store/effects/list.effect';

import {BoardReducer} from './store/reducers/board.reducer';
import {CardReducer} from './store/reducers/card.reducer';
import {LabelReducer} from './store/reducers/label.reducer';
import {ListReducer} from './store/reducers/list.reducer';
import {SelectedReducer} from './store/reducers/selected.reducer';



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        EffectsModule.forRoot([
            BoardEffect,
            CardEffect,
            LabelEffect,
            ListEffect,
        ]),
        FormsModule,
        HttpClientModule,
        MatCardModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        StoreModule.forRoot({
            board: BoardReducer,
            card: CardReducer,
            label: LabelReducer,
            list: ListReducer,
            selected: SelectedReducer,
        }),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ],
    providers: [
        TrelloService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
