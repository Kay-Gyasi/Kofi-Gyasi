import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service:SharedService) { }

  servicesList:any;

  ngOnInit(): void {
    this.refreshServicesList();
  }

  cardImage: string = "assets/Images/Kofi.png";

  cardImage2: string = "assets/Images/Kofi2.jpg";

  cardImage3: string = "assets/Images/Kofi3.jpg";

  refreshServicesList(){
    return this.service.GetCategories().subscribe(data =>{
      this.servicesList = data;
      console.log(data);
    })
  }

  introMsg:string = "I am a .NET developer and a Machine Learning enthusiast. Join me and let's take your software and business solutions to the next level.";

}
