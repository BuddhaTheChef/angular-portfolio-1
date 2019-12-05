import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BiographyComponent } from './biography/biography.component';
import { HomeComponent } from './home/home.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { ResumeComponent } from './resume/resume.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'biography', component: BiographyComponent},
  {path: 'social-media', component: SocialMediaComponent},
  {path: 'resume', component: ResumeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
