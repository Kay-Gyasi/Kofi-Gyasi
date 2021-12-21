import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/shared.service';
import { LoadAboutAction } from 'src/app/state/store/actions/about.actions';
import { AboutItems } from 'src/app/state/store/models/about.model';
import { AppState } from 'src/app/state/store/reducers';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private service:SharedService, private store:Store<AppState>) { }

  resources$:Observable<Array<AboutItems>> | undefined;

  loading$:Observable<Boolean> | undefined;

  error$:Observable<Error> | undefined;

  ngOnInit(): void {
    this.resources$ = this.store.select((store) => store.about.list);
    this.loading$ = this.store.select((store) => store.about.loading);
    this.error$ = this.store.select((store) => store.about.error);

    this.store.dispatch(new LoadAboutAction);
  }
  
  
  /* refreshSkills(){
    this.service.Skills().subscribe(data => {
      data.forEach(element => {
        if (element.isMainSkill == true) {
          this.resources.push(element);
        }
      });
      return this.resources;
    });

  } */
}
