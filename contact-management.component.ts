import { Component, OnInit } from '@angular/core';
import { contact } from './contactmodel';

@Component({
  selector: 'app-contact-management',
  templateUrl: './contact-management.component.html',
  styleUrls: ['./contact-management.component.css']
})
export class ContactManagementComponent implements OnInit {
  isFormEnable: boolean = false;
  contactform: any;
  contactmodel: contact;
  contactservice: any;
  contacts: { firstname: string; lastname: string; username: string; email: string; phonenumber: number; password: number; confirmpassword: string; address: string; }[] = [];
  toasterService: any;
  translate: any;
  constructor(  ) {
    
    this.contactmodel = ({} as contact);
   }

  ngOnInit(): void {
  
 
  }
  cancelForm() {
    this.isFormEnable = false;
}
submitUser(){
  console.log(this.contactform.form.valid);
  this.contactform.form.markAllAsTouched();
  if (!this.contactform.form.valid)
  this.contacts = [{  
    firstname:'kanna',
    lastname:'vanga',
    username:'hari',
    email:'hari.23@gmail.com',
    phonenumber:6287858781,
    password:234524,
    confirmpassword:'wgebb',
    address:'hyderabad'
  }]

  this.contactmodel.firstname = this.contactmodel.firstname;
  this.contactmodel.lastname = this.contactmodel.lastname;
  this.contactmodel.username = this.contactmodel.username;
  this.contactmodel.password = this.contactmodel.password;
  this.contactmodel.confirmpassword = this.contactmodel.confirmpassword;
  this.contactmodel.phonenumber = Number(this.contactmodel.phonenumber);
  this.contactmodel.address = this.contactmodel.address;
  this.contactservice.addMember(this.contactmodel).subscribe((res:any) => {
  
    this.toasterService.show('success', this.translate.instant('message'), this.translate.instant('createsuccess'), 3000)
        });
     
        


}


}
