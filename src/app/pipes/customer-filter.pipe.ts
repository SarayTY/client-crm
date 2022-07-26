import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../interfaces/customer';
// import { CustomersService } from '../services/customer-s.service';

@Pipe({
  name: 'filterCustomer',
})
export class FilterCustomerPipe implements PipeTransform {
  transform(
    customers: Customer[] | null,
    propertyName: keyof Customer,
    searchTerm: string
  ): Customer[] | null {
    if (!customers) {
      return null;
    }

    return customers.filter((customer) => {
      return customer[propertyName]
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
  }
}
