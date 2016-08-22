import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { App } from "./app.component";

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [App],
  exports: [App],
  bootstrap: [App]
})

export class AppModule {

}
