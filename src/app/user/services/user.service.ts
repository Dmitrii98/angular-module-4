import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModule } from '../user.module';

@Injectable()
export class UserService {
    private readonly BASE_URL = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getUser(): Observable<UserModule> {
        return this.http.get<UserModule>(`${this.BASE_URL}/user`);
    }
}