import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { FooterComponent } from './components/footer/footer.component';
import { InteractionComponent } from './components/interaction/interaction.component';
import { WebprojectsComponent } from './components/webprojects/webprojects.component';
import { PhoneFooterComponent } from './components/phone-footer/phone-footer.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './state/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { PortfolioEffects } from './state/effects/portfolio.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AlertifyService } from './service/alertify.service';
import { DataProjectsComponent } from './components/data-projects/data-projects.component';
import { DesktopProjectsComponent } from './components/desktop-projects/desktop-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    ResumeComponent,
    FooterComponent,
    InteractionComponent,
    WebprojectsComponent,
    PhoneFooterComponent,
    DataProjectsComponent,
    DesktopProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([PortfolioEffects]),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [SharedService, AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
