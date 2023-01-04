import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'pr-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthService) {}

  public ngOnInit(): void {

  }

  public signUp(email: string, password: string): void {
    this.authService.signUp(email, password);
  }
}
