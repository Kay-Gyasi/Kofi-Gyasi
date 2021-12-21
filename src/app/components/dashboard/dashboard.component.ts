import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/state/store/reducers';
import { CategoryItems } from 'src/app/state/store/models/category.models';
import { Observable } from 'rxjs';
import { LoadCategoryAction } from 'src/app/state/store/actions/category.action';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private store:Store<AppState>) { }

  servicesList$: Observable<Array<CategoryItems>> | undefined;

  loading$: Observable<Boolean> | undefined;

  error$: Observable<Error> | undefined;

  ngOnInit(): void {
    this.servicesList$ = this.store.select((store) => store.category.list);
    this.loading$ = this.store.select((store) => store.category.loading);
    this.error$ = this.store.select((store) => store.category.error);

    this.store.dispatch(new LoadCategoryAction());
  }

  cardImage: string = "assets/Images/Kofi.png";

  cardImage2: string = "assets/Images/Kofi2.jpg";

  cardImage3: string = "assets/Images/Kofi3.jpg";

  /* refreshServicesList(){
    return this.service.GetCategories().subscribe(data =>{
      this.servicesList = data;
      console.log(data);
    })
  } */

  introMsg:string = "I am a .NET developer and a Machine Learning enthusiast. Join me and let's take your software and business solutions to the next level.";

}
