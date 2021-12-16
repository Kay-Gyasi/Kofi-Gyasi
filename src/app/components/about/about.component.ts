import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private service:SharedService) { }

  resources:any=[];

  ngOnInit(): void {
    this.refreshSkills();    
  }
  
  
  refreshSkills(){
    this.service.Skills().subscribe(data => {
      data.forEach(element => {
        if (element.isMainSkill == true) {
          this.resources.push(element);
        }
      });
      return this.resources;
    });

  }
}
