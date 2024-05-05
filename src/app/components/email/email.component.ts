import { Component } from '@angular/core';
import { EmailService } from '../../service/email.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {
  data = {
    to : "",
    subject: "",
    body: ""
  }
  spinerFlag:boolean = false;
  constructor(private emailService: EmailService, private snackBar: MatSnackBar ){}
  ngOnInit():void{

  }
  doSubmitForm(){
    console.log("try to submit form");
    if(this.data.to==''||this.data.subject==''||this.data.body==''){
      this.snackBar.open("Fields can not be empty", "OK" );
      return;
    }
    this.spinerFlag = true;
    this.emailService.sendMail(this.data).subscribe(response => {
      console.log("SUCCESS: MAIL SENT");
      this.spinerFlag = false;
    },error=>{
      console.error("Error occur at the time of submit mail");
      this.spinerFlag = false;
    });
    
  }
}
