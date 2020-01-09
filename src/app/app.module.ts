import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PremierComponent } from './premier/premier.component';
import { BindingComponent } from './binding/binding.component';
import { SqrtPipe } from './sqrt.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PremierComponent,
    BindingComponent,
    SqrtPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
