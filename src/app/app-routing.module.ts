import { CvCoverComponent } from './views/cv-cover/cv-cover.component';
import { ResumeComponent } from './views/resume/resume.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: ResumeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'cover', component: CvCoverComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
