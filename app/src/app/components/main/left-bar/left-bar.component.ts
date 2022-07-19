import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Store } from '@ngrx/store';

import * as reducers from '../../../store/reducers/user.reducers';
import { UserModel } from 'src/app/interfaces/user-model';
import { FamilyModel } from 'src/app/interfaces/family-model';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss']
})
export class LeftBarComponent implements OnInit {

  public familyArray: FamilyModel[] = [];

  constructor(private apiService: ApiService, private store: Store) { }

  ngOnInit(): void {
    this.store.select(reducers.getCurrentUser).subscribe(data =>{
      this.apiService.getFailies$((data as UserModel).token).subscribe(data => this.familyArray = [...data])
    })

  }


}
