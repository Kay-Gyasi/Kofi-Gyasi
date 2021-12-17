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
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
