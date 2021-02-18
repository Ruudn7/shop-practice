import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { StaticPagesService } from './../static-pages.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactForm = this.form.group({
    email: this.form.control('', [
      Validators.required,
      Validators.email
    ]),
    message: this.form.control('', [
      Validators.required
    ])
  });
  showMessageError = false;

  constructor(
    private form: FormBuilder,
    private staticPageServ: StaticPagesService,
    public toastr: ToastrService
  ) { }

  onSubmit(): void {
    this.staticPageServ.addConntact(this.contactForm.value).subscribe(
      () => {
        this.contactForm.reset();
        this.showMessageError = false;
      },
      () => {
        console.log('Błąd');
        this.showMessageError = true;
      }
    );
  }

}
