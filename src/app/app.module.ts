import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SliderComponent } from './shared/slider/slider.component';
import { KeyComponent } from './shared/key/key.component';
import { GifsModule } from './gifs/gifs.module';
import { PeopleModule } from './people/people.module';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './gifs/main/main.component';
import { MainPeopleComponent } from './people/main-people/main-people.component';

const rutas: Routes = [{
  path: 'gifs',
  component: MainComponent
}, {
  path: 'personas',
  component: MainPeopleComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    KeyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GifsModule,
    PeopleModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
