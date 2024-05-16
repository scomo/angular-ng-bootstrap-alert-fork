import './polyfills';
import {provideHttpClient, withNoXsrfProtection} from '@angular/common/http';
import {bootstrapApplication} from '@angular/platform-browser';
import {NgbdAlertCloseable} from './app/alert-closeable';

bootstrapApplication(NgbdAlertCloseable, {
  providers: [
    provideHttpClient(withNoXsrfProtection()),
  ],
})
.then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherwise, log the boot error
})
.catch(err => console.error(err));
