import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { UserModule } from '../user.module';
import { UserService } from './user.service';

@Injectable()
export class UserStoreService {
    private readonly _name$$ = new BehaviorSubject<string>('');
    private readonly _isAdmin$$ = new BehaviorSubject<boolean>(false);

    public readonly name$: Observable<string> = this._name$$.asObservable();
    public readonly isAdmin$: Observable<boolean> = this._isAdmin$$.asObservable();

    constructor(private userService: UserService) {
        this.getUser();
    }

    private getUser() {
        this.userService.getUser().subscribe(user => {
            this._name$$.next(user?.name);
            this._isAdmin$$.next(user?.roles.includes('admin'));
        });
    }

    public get name(): string {
        return this._name$$.getValue();
    }

    public get isAdmin(): boolean {
        return this._isAdmin$$.getValue();
    }
}