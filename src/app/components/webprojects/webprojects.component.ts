import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-webprojects',
  templateUrl: './webprojects.component.html',
  styleUrls: ['./webprojects.component.css']
})
export class WebprojectsComponent implements OnInit {

  constructor(private service:SharedService) { }

  projects:any=[];

  ngOnInit(): void {
    this.refreshProjectsList();
  }

  refreshProjectsList(){
    return this.service.GetProjects().subscribe(data => {
      this.projects = data;
    })
  }
}
