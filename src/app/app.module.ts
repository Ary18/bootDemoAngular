import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsService } from './services/posts.service';
import { ElencoPostComponent } from './elenco-post/elenco-post.component';
import { DettaglioPostComponent } from './dettaglio-post/dettaglio-post.component';

@NgModule({
  declarations: [
    AppComponent,
    ElencoPostComponent,
    DettaglioPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
