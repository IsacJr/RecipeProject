import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactModel } from 'src/app/recipe/models/ContactModel';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(60)]],
      lastName: ['', [Validators.required, Validators.maxLength(60)]],
      email: ['', [Validators.required, Validators.maxLength(60), Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.maxLength(60)]],
      comments: ['', Validators.maxLength(500)]
    });

  }

  ngOnInit(): void {
  }

  handleSubmit(e: any){
    e.preventDefault();
    if(this.contactForm.valid) {
      const contact = this.contactForm.value as ContactModel;
      console.log(contact);
      this.contactForm.reset('');
    }
  }

}
