import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PremierComponent } from './premier/premier.component';
import { BindingComponent } from './binding/binding.component';
import { SqrtPipe } from './sqrt.pipe';
import { HttpClientModule} from '@angular/common/http';
import { PixabayComponent } from './pixabay/pixabay.component'

@NgModule({
  declarations: [
    AppComponent,
    PremierComponent,
    BindingComponent,
    SqrtPipe,
    PixabayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
