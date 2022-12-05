import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home/home.component';
import { MenuComponent } from './component/home/menu/menu.component';
import { PostPlistAdminComponent } from './component/home/post/post-plist-admin/post-plist-admin.component';
import { UserPlistAdminComponent } from './component/home/user/user-plist-admin/user-plist-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    PostPlistAdminComponent,
    UserPlistAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
