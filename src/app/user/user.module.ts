import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './services/user.service';
import { UserStoreService } from './services/user-store.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        UserService,
        UserStoreService
    ]
})
export class UserModule {
    name: string = '';
    roles: string = '';
}