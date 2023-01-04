import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'pr-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  constructor(private authService: AuthService) {}

  public signIn(username: string, password: string): void {
    this.authService.signIn(username, password);
  }
}
