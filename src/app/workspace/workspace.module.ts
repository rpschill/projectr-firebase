import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { WorkspaceComponent } from './workspace.component';
import { WorkspaceRouterModule } from './workspace-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    WorkspaceComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    WorkspaceRouterModule
  ],
  exports: []
})
export class WorkspaceModule {}
