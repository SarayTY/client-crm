import { Component, OnDestroy ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators'
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customer-s.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailsComponent implements OnInit ,OnDestroy {
  customer$:Observable<Customer>;

  constructor( activatedRouteService:ActivatedRoute,
  customerService:CustomersService  ) { 
    this.customer$ = activatedRouteService.params.pipe(
      switchMap((params) => customerService.getById(params.id))
    )
  }

  ngOnInit(): void {
  }

  ngOnDestroy():void{

  }
}

