import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './modules/registration/registration.component';
import { HomeComponent } from './modules/home/home.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
const routes: Routes = [{
  path: '',
  component: SkeletonComponent,
  children: [
    { path: '', component: HomeComponent },
    { path: 'register', component: RegistrationComponent }
  ]

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
