import { Injectable } from '@angular/core';
import OktaSignIn from '@okta/okta-signin-widget';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class Okta {
  widget;

  constructor() {
    this.widget = new OktaSignIn({
      baseUrl: 'https://dev-90450890.okta.com/oauth2/default/',
      clientId: '0oa55fzjmraJ21iEs5d7',
      redirectUri: 'http://localhost:4200'
    });
  }

  getWidget() {
    return this.widget;
  }
}
