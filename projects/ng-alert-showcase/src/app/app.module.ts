import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgSimpleAlertModule } from "../../../ng-simple-alert/src/lib/ng-simple-alert.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgSimpleAlertModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
