import { NgModule } from '@angular/core';

import { MainLayoutComponent } from './main-layout.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'widgets/header/header.component';
import { TaskbarComponent } from 'widgets/taskbar/taskbar.component';
import { SvgLogoComponent } from 'shared/icons/logo/svg-logo.component';
import { ThemesToggleComponent } from 'widgets/header/components/themes-toggle/themes-toggle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackgroundComponent } from './components/background/background.component';
import { ClockComponent } from 'widgets/header/components/clock/clock.component';
import { SimpleClockComponent } from 'widgets/header/components/clock/components/simple-clock/simple-clock.component';
import { PopupComponent } from 'shared/ui/popup/popup.component';
import { RadioModule } from '../../../shared/ui/radio/radio.module';

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
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    TaskbarComponent,
    SvgLogoComponent,
    ThemesToggleComponent,
    BackgroundComponent,
    ClockComponent,
    SimpleClockComponent,
    PopupComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgOptimizedImage,
    ReactiveFormsModule,
    FormsModule,
    RadioModule,
  ],
  exports: [HeaderComponent],
})
export class MainLayoutModule {}
