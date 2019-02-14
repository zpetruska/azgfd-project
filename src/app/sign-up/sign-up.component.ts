import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {SignUpService} from "./sign-up.service";
import {Contact} from "./contact";

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
    @ViewChild('f') suForm: NgForm;

    constructor(private signUpService: SignUpService) {
    }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        const value = form.value;
        console.log(form,value);
        if(form.valid) {
            const newContact = new Contact(value.name, value.email, value.newsletter);
            this.signUpService.addContact(newContact);
            form.reset();
            this.suForm.reset();
        } else {
//add form control
       }
    }
}
