import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private service:SharedService) { }

  twitter:any;
  instagram = "Instagram";
  linkedin = "LinkedIn";
  github = "Github";

  ngOnInit(): void {
    this.GetTwitter();
  }

  GetTwitter(){
    return this.service.GetContact(1).subscribe((contact: any) => {
      this.twitter = contact;
    })
  }

}
