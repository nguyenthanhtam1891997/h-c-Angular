import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServerComponent} from './server/server.component';
import {AlertSuccessComponent} from './alert-success/alert-success.component';
import {AlertWarningComponent} from './alert-warning/alert-warning.component';
import {BindingDataComponent} from "./binding-data/binding-data.component";
import {FormsModule} from "@angular/forms";
import {DirectivesComponent} from './directives/directives.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    AlertSuccessComponent,
    AlertWarningComponent,
    BindingDataComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
