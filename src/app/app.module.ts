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
import { DesktopProjectsComponent } from './components/desktop-projects/desktop-projects.component';
import { MobileProjectsComponent } from './components/mobile-projects/mobile-projects.component';
import { DataScienceProjectsComponent } from './components/data-science-projects/data-science-projects.component';
import { PhoneFooterComponent } from './components/phone-footer/phone-footer.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './state/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { PortfolioEffects } from './state/effects/portfolio.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    ResumeComponent,
    FooterComponent,
    InteractionComponent,
    WebprojectsComponent,
    DesktopProjectsComponent,
    MobileProjectsComponent,
    DataScienceProjectsComponent,
    PhoneFooterComponent
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
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
