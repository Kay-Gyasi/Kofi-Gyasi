import { Component, OnInit } from '@angular/core';
import { Comments } from 'src/app/comments';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit {

  constructor(private service:SharedService) { }

  descriptionError = true;

  errorMsg = "";

  submitted = false;

  ngOnInit(): void {
  }

  commentClass = new Comments("", "", "", "default", "");

  validateTopic(value: string){
    if(value == "default"){
      this.descriptionError = true;
    }
    else{
      this.descriptionError = false;
    }
  }

  onSubmit(data: Comments){
    this.submitted = true;

    this.service.PostInteraction(data).subscribe({
      next: data => console.log(data),
      error: error => this.errorMsg = error.StatusText
    });  
  }
}
