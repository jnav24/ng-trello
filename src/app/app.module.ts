import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule, MatProgressSpinnerModule, MatSelectModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { StoreModule } from '@ngrx/store';
import {TrelloReducer} from './store/reducers/trello.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {TrelloService} from './services/trello.service';
import {EffectsModule} from '@ngrx/effects';
import {TrelloEffect} from './store/effects/trello.effect';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        EffectsModule.forRoot([
            TrelloEffect,
        ]),
        HttpClientModule,
        MatCardModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        StoreModule.forRoot({
            trello: TrelloReducer,
        }),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ],
    providers: [
        TrelloService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
