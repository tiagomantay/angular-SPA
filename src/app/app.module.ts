import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { VisualModule } from './visual/visual.module';
import { PictureComponent } from './visual/picture/picture.component';

@NgModule({
  declarations: [
    AppComponent,
    PictureComponent
  ],
  imports: [
    BrowserModule,
    VisualModule
  ]
})
export class AppModule { }
