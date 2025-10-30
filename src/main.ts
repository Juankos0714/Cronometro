import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { CronometroComponent } from './app/cronometro/cronometro.component';

bootstrapApplication(CronometroComponent)
  .catch((err) => console.error(err));

