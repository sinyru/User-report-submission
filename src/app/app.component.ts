import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emailValid: boolean = false;
  allFieldsFilled: boolean = false;
  messageToUser: string = "<p><strong>Please fill in everything</strong></p>";
  submit(name: string, email: string, department: string, deliveryDate: string, code: string, reportType: string) {
    this.validateFields(name, email, department, deliveryDate, code, reportType);
    this.validateEmail(email);
    if (this.allFieldsFilled) {
      let intakeForm = {
        name: name,
        email: email,
        department: department,
        deliveryDate: deliveryDate,
        code: code,
        reportType: reportType
      };
      if (this.emailValid) {
        this.messageToUser = "<p><strong>Report Submitted!</strong></p>";
        console.log(intakeForm);
      } else {
        this.messageToUser = "<p><strong>Please enter a valid email!</strong></p>";
      }
    } else {
      this.messageToUser = "<p><strong>All of the fields are required and cannot be blank!</strong></p>";
    }
  }

  validateEmail(email: string) {
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@uplift.com/;
    (pattern.exec(email) !== null) ? this.emailValid = true : this.emailValid = false;
  }

  validateFields(name: string, email: string, department: string, deliveryDate: string, code: string, reportType: string) {
    (name && email && department && deliveryDate && code && reportType) ? this.allFieldsFilled = true : this.allFieldsFilled = false;
  }

}
