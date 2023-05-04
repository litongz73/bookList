import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DetailComponent } from './components/detail/detail.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [AppComponent, DetailComponent, ListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
