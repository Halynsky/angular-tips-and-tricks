import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JuniorModule } from './components/junior/junior.module';
import { routing } from './app.routing';
import { MenuComponent } from './components/menu/menu.component';
import { MiddleModule } from './components/middle/middle.module';
import { SeniorModule } from './components/senior/senior.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './components/shared/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    routing,
    BrowserModule,
    JuniorModule,
    MiddleModule,
    SeniorModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
