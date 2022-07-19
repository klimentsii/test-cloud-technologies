import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Store } from '@ngrx/store';

import * as reducers from '../../store/reducers/user.reducers';
import { UserModel } from 'src/app/interfaces/user-model';
import { ProductModel } from 'src/app/interfaces/product-model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public array: ProductModel[] = [];

  constructor(private apiService: ApiService, private store: Store) { }

  ngOnInit(): void {
    this.store.select(reducers.getCurrentUser).subscribe(data =>{
      this.apiService.getProducts$((data as UserModel).token).subscribe(data => this.array = [...data])
    })

  }

}
