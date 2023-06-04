import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { BrowseComponent } from './browse/browse.component';

const routes: Routes = [
        {path: 'main-page', component: MainPageComponent},
        {path: '', component: LoginComponent},
        {path: 'browse', component: BrowseComponent},
        {path: 'discover_podcasts', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
