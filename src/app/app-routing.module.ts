import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'login', loadChildren: () => import('./shared/components/login-form/login-form.module').then(m => m.LoginFormModule) },
    // { path: 'registration', loadChildren: () => import('path').then(m => m.RegistrationModule) },
    // { path: 'courses', loadChildren: () => import('path').then(m => m.CoursesModule) },
    // { path: 'courses/add', loadChildren: () => import('path').then(m => m.AddCourseModule) },
    // { path: 'courses/:id', loadChildren: () => import('path').then(m => m.ShowCourseModule) },
    // { path: 'courses/edit/:id', loadChildren: () => import('path').then(m => m.EditCourseModule) },
    // { path: '', redirectTo: 'courses', pathMatch: 'full' },
    // { path: '**', redirectTo: 'courses', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }