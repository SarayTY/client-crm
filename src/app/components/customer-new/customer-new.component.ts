import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';
import { NgForm } from '@angular/forms';
import { CustomersService } from 'src/app/services/customer-s.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.scss'],
})
export class CustomerNewComponent implements OnInit {
  form: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  };

  constructor(
    private customerService: CustomersService,
    private routerService: Router,
  ) {}

  async onSubmit({ valid }: NgForm) {
    if (valid) {
      await this.customerService.add(this.form)
      this.routerService.navigate(['..']);
    }
  }

  reset(customerForm: NgForm) {
    // console.log(customerForm);
    customerForm.resetForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      notes: '',
    });
  }

  ngOnInit(): void {}
}
