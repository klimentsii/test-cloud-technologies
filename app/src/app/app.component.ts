import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {Location} from '@angular/common';

import * as fromUser from './store/reducers/user.reducers'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private store: Store, private location: Location) {
    // console.log(store.select(fromUser.getCurrentUser));
    if (!localStorage.getItem('email')) {

      // store.select(fromUser.getCurrentUser).subscribe(data => console.log(data))
      this.location.replaceState('login');
    }
  }
}
