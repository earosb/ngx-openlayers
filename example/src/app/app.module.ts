import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AngularOpenlayersModule} from 'ngx-openlayers';
import {olx} from 'openlayers';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {ClusterComponent} from './cluster/cluster.component';
import {BasicComponent} from './basic/basic.component';

const foo: olx.animation.AnimateCallback = null;

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    ClusterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularOpenlayersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
