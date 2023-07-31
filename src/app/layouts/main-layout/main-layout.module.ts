import { NgModule } from '@angular/core';

import { MainLayoutComponent } from './main-layout.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'widgets/header/header.component';
import { TaskbarComponent } from 'widgets/taskbar/taskbar.component';
import { SvgLogoComponent } from '../../../shared/icons/logo/svg-logo.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('pages/main-page/main-page.module').then((m) => m.MainPageModule),
      },
    ],
  },
];

@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent, TaskbarComponent, SvgLogoComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NgOptimizedImage],
  exports: [HeaderComponent],
})
export class MainLayoutModule {}