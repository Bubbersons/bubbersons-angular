import { NgModule } from '@angular/core';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CategoriesModule } from './components/categories/categories.module';
import { CategoriesComponent } from './components/categories/categories.component';




@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', component: HomepageComponent,},
      {path: 'categories',loadChildren: () => import('./components/categories/categories.module').then(m=>m.CategoriesModule)},
      {path: 'contact-us', component: ContactUsComponent},
      {path:'**',component: PageNotFoundComponent }
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
