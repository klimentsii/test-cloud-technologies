import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Store } from '@ngrx/store';

import * as reducers from '../../store/reducers/user.reducers';
import { UserModel } from 'src/app/interfaces/user-model';
import { TransactionModel } from 'src/app/interfaces/transaction-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public array: TransactionModel[] = [];

  public email: string  = '';

  constructor(private apiService: ApiService, private store: Store) { }

  ngOnInit(): void {
    this.store.select(reducers.getCurrentUser).subscribe(data => {
      this.email = data.email;
      this.apiService.getTransactions$((data as UserModel).token).subscribe(data => this.array = [...data])
    })
  }

}
