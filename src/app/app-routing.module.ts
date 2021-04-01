import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './componenets/pagenotfound/pagenotfound.component';
import { MaincontainerComponent } from './containers/maincontainer/maincontainer.component';
import { VirtualwalkComponent } from './containers/virtualwalk/virtualwalk.component';
import { FbxdialogComponent } from './componenets/modals/fbxdialog/fbxdialog.component';
import {LoginComponent}  from  './componenets/login/login.component';
import {SignupComponent} from './componenets/signup/signup.component';
import {ProfileComponent} from './componenets/profile/profile.component';
const routes: Routes = [ 
    {path: 'virtualwalk', component: VirtualwalkComponent},
    {path: 'profile',component: ProfileComponent},
    {path: '', redirectTo: '/main', pathMatch: 'full'},
    {path: 'main', component: MaincontainerComponent},
    {path: 'fbxdialog/:id', component:FbxdialogComponent},
    {path: 'login', component:LoginComponent},
    {path: 'signup', component:SignupComponent},
    {path: '**', component: PagenotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
