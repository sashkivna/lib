import { NgModule } from "@angular/core";
import { NgSimpleAlertComponent } from "./ng-simple-alert.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [NgSimpleAlertComponent],
  imports: [CommonModule],
  exports: [NgSimpleAlertComponent]
})
export class NgSimpleAlertModule {}
