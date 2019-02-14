import { Injectable } from '@angular/core';
import {Contact} from "./contact";

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

    private contacts: Contact[] = [];

    addContact(contact: Contact) {
        this.contacts.push(contact);
        console.log(this.contacts);
    }
}
