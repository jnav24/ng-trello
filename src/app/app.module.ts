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
        MatCardModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        StoreModule.forRoot({
            trello: TrelloReducer,
        }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
