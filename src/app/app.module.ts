import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaincontainerComponent } from './containers/maincontainer/maincontainer.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './componenets/navbar/navbar.component';

import { PagenotfoundComponent } from './componenets/pagenotfound/pagenotfound.component';
import { DashboardComponent } from './componenets/dashboard/dashboard.component';
import { VirtualwalkComponent } from './containers/virtualwalk/virtualwalk.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { DetaildialogComponent } from './componenets/modals/detaildialog/detaildialog.component';
import { FbxdialogComponent } from './componenets/modals/fbxdialog/fbxdialog.component';
import {MatIconModule} from '@angular/material/icon';
import { ImagedialogComponent } from './componenets/modals/imagedialog/imagedialog.component';
import { LoginComponent } from './componenets/login/login.component';
import { SignupComponent } from './componenets/signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { CarouselComponent } from './componenets/carousel/carousel.component';
import { CardsComponent } from './componenets/cards/cards.component';
import {MatCardModule} from '@angular/material/card';
import { CardcontainerComponent } from './containers/cardcontainer/cardcontainer.component';
import { FooterComponent } from './componenets/footer/footer.component';
import { ProfileComponent } from './componenets/profile/profile.component';
import { DoughnutChartComponent } from './componenets/doughnut-chart/doughnut-chart.component';
import { ChartsModule } from 'ng2-charts';
import { PostsComponent } from './componenets/posts/posts.component';




@NgModule({
  declarations: [
    AppComponent,
    MaincontainerComponent,
    NavbarComponent,
    PagenotfoundComponent,
    DashboardComponent,
    VirtualwalkComponent,
    DetaildialogComponent,
    FbxdialogComponent,
    ImagedialogComponent,
    LoginComponent,
    SignupComponent,
    CarouselComponent,
    CardsComponent,
    CardcontainerComponent,
    FooterComponent,
    ProfileComponent,
    DoughnutChartComponent,
    PostsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    ChartsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  entryComponents: [DetaildialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
