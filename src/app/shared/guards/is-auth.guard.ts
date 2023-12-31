import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class IsAuthGuard {
  constructor(private readonly _router: Router) {}

  canActivate(): boolean {
    return true;
  }

  canActivateChild(): boolean {
    return true;
  }
}
