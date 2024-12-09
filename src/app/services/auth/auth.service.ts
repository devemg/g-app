import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(cui: number, password: string) {
    return Promise.resolve(true);
  }

  verify(code: string) {
    return Promise.resolve(true);
  }
}
