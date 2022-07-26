import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customer-s.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  form:Customer= {
    id:'',
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
   private activatedRouteService:ActivatedRoute,

  ) { }
  


  async onSubmit({ valid }: NgForm) {
    if (valid) {
      await this.customerService.update(this.form)
      this.routerService.navigate(['../..'], {
        relativeTo:this.activatedRouteService,
      });
    }
  }

  reset(customerForm: NgForm) {
    console.log(customerForm);
    customerForm.resetForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      notes: '',
    });
  }

  ngOnInit(): void {
      this.activatedRouteService.params
      .pipe(
      switchMap((params) => this.customerService.getById(params.id)),
      take(1)
      )
      .subscribe((customer) => {
        this.form = customer;
      })

  }

}

