import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material";
import { MatTabsModule } from '@angular/material';
import { AppComponent } from "./app.component";
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatToolbarModule, MatTabsModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
