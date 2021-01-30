import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) { 

    this.contactForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phoneNumber: [''],
      comments: ['']
    });

  }

  ngOnInit(): void {
  }

  handleSubmit(e){
    
  }

}
