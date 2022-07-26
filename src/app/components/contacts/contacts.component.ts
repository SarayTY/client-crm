import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact-i';
import { ContactSService } from 'src/app/services/contact-s.service';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  
  contacts: Contact[] = [] ;

  constructor(contactService: ContactSService) { 
    this.contacts = contactService.getAll();
  }

  ngOnInit(): void {
  }

}
