import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { AppModule2 } from './app/app.module.2';

if (environment.production) {
  enableProdMode();
}

if (environment.flag) {
  platformBrowserDynamic().bootstrapModule(AppModule2).catch(err => console.log(err));
} else {
  platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err));
}
