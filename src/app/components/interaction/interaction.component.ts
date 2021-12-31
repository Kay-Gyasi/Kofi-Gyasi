import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Comments } from 'src/app/comments';
import { SharedService } from 'src/app/shared.service';
import { AlertifyService } from 'src/app/service/alertify.service';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit {

  constructor(private service:SharedService, private alertify: AlertifyService) { }

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

  onSubmit(data: Comments, form: NgForm){
    this.submitted = true;

    this.service.PostInteraction(data).subscribe({
      next: data => {console.log(data), this.alertify.success("Comment sent");
    },
      error: error => this.errorMsg = error.StatusText,
    });

    form.reset();
    //this.commentClass = new Comments("", "", "", "default", "");
  }
}
