import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home/home.component';
import { MenuComponent } from './component/home/menu/menu.component';
import { PostPlistAdminComponent } from './component/home/post/post-plist-admin/post-plist-admin.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'home', component:HomeComponent },
  { path: 'menu', component:MenuComponent },
  { path: 'post', component:PostPlistAdminComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
