import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'pr-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent {
  public active = true;

  constructor(private authService: AuthService) {}

  public signOut(): void {
    this.authService.signOut();
  }
}
