import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SportComponent } from './sport/sport.component';
import { EducationComponent } from './education/education.component';
import { HealthComponent } from './health/health.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'sport', component: SportComponent },
  {path: 'health', component: HealthComponent },
  {path: 'education', component: EducationComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'sport/:post.author', component: PostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
