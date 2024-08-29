import { bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/core/components/app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutingModule), // Configura il routing
  ],
}).catch((err) => console.error(err));
