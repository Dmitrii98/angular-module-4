import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // {
    //     path: 'courses',
    //     component: CourseListComponent,
    //     canLoad: [AuthorizedGuard],
    // },
    // {
    //     path: 'course/add',
    //     component: CourseAddComponent,
    //     canLoad: [AuthorizedGuard],
    // },
    // {
    //     path: 'course/edit/:id',
    //     component: CourseEditComponent,
    //     canLoad: [AuthorizedGuard],
    // },
    // {
    //     path: 'course/:id',
    //     component: CourseDetailComponent,
    //     canLoad: [AuthorizedGuard],
    // },
    // {
    //     path: 'login',
    //     component: LoginComponent,
    //     canActivate: [NotAuthorizedGuard],
    // },
    // {
    //     path: 'registration',
    //     component: RegistrationComponent,
    //     canActivate: [NotAuthorizedGuard],
    // },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}