import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms' 
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component'
import { ProductListComponent } from './products/product-list-component';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, ProductListComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent, WelcomeComponent]
})
export class AppModule { }
