import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LocationModel } from 'src/app/interfaces/location-model';
import { UserModel } from 'src/app/interfaces/user-model';
import { ApiService } from 'src/app/services/api.service';
import * as reducers from '../../../store/reducers/user.reducers';

@Component({
  selector: 'app-right-bar',
  templateUrl: './right-bar.component.html',
  styleUrls: ['./right-bar.component.scss']
})
export class RightBarComponent implements OnInit {

  public array: LocationModel[] = [];

  constructor(private apiService: ApiService, private store: Store) { }

  ngOnInit(): void {
    this.store.select(reducers.getCurrentUser).subscribe(data =>{
      this.apiService.getLocations$((data as UserModel).token).subscribe(data => this.array = [...data])
    })

  }

}
