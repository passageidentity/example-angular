import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/views/Home/home.component';
import { DashboardComponent } from 'src/views/Dashboard/dashboard.component';
import { LayoutComponent } from 'src/components/layout/layout.component';
import { BannerComponent } from 'src/components/banner/banner.component';
import { AuthorizedComponent } from 'src/components/authorized/authorized.component';
import { UnauthorizedComponent } from 'src/components/unauthorized/unauthorized.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
