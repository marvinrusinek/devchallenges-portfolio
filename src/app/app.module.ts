import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { BiographyComponent } from './portfolio/containers/biography/biography.component';
import { FrontendSkillsComponent } from './portfolio/containers/frontend-skills/frontend-skills.component';
import { BackendSkillsComponent } from './portfolio/containers/backend-skills/backend-skills.component';
import { ExperiencesComponent } from './portfolio/containers/experiences/experiences.component';
import { ProjectsComponent } from './portfolio/containers/projects/projects.component';
import { ProjectComponent } from './portfolio/containers/projects/project/project.component';
import { HobbiesComponent } from './portfolio/containers/hobbies/hobbies.component';
import { BlogsComponent } from './portfolio/containers/blogs/blogs.component';
import { EducationComponent } from './portfolio/containers/education/education.component';
import { BlogComponent } from './portfolio/containers/blogs/blog/blog.component';
import { CertificatesComponent } from './portfolio/containers/certificates/certificates.component';
import { TestimonialsComponent } from './portfolio/containers/testimonials/testimonials.component';
import { ServicesComponent } from './portfolio/containers/services/services.component';
import { FooterComponent } from './portfolio/containers/footer/footer.component';
import { PageNotFoundComponent } from './portfolio/containers/page-not-found/page-not-found.component';

import { FrontendSkillsService } from './portfolio/services/frontend-skills.service';
import { BackendSkillsService } from './portfolio/services/backend-skills.service';
import { ExperiencesService } from './portfolio/services/experiences.service';
import { ProjectsService } from './portfolio/services/projects.service';
import { HobbiesService } from './portfolio/services/hobbies.service';
import { BlogsService } from './portfolio/services/blogs.service';
import { EducationService } from './portfolio/services/education.service';
import { CertificatesService } from './portfolio/services/certificates.service';
import { ServicesService } from './portfolio/services/services.service';
import { FilterBtnService } from './portfolio/services/filter.service';

import { ProjectFilterPipe } from './portfolio/pipes/filter.pipe';
import { LazyImgDirective } from './portfolio/directives/lazy-img.directive';
import { NgxPaginationModule } from 'ngx-pagination';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgBackToTopModule } from 'ng-back-to-top';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'portfolio',
    pathMatch: 'full'
  },
  {
    path: 'portfolio',
    loadChildren: () =>
      import('./portfolio/routing/portfolio-routing.module').then(m => m.PortfolioRoutingModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BiographyComponent,
    FrontendSkillsComponent,
    BackendSkillsComponent,
    LazyImgDirective,
    ExperiencesComponent,
    ProjectsComponent,
    HobbiesComponent,
    BlogsComponent,
    EducationComponent,
    FooterComponent,
    ProjectComponent,
    ProjectFilterPipe,
    BlogComponent,
    TestimonialsComponent,
    ServicesComponent,
    CertificatesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatCardModule,
    NgxPaginationModule,
    SlickCarouselModule,
    NgBackToTopModule
  ],
  providers: [
    FrontendSkillsService,
    BackendSkillsService,
    ExperiencesService,
    ProjectsService,
    HobbiesService,
    BlogsService,
    EducationService,
    CertificatesService,
    ServicesService,
    FilterBtnService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
