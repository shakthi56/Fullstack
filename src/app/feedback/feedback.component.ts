import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  conFirmsubmit(){

    const textarea =<HTMLTextAreaElement>document.getElementById('txtarea');
    var status=confirm("you want to submit this page?");
    if(status==true)
  {
    textarea.value="";
  } else{
  return;
  }
  
    }

}
