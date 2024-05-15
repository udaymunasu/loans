import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
})
export class AddCustomerComponent implements OnInit {
  uploadForm: FormGroup;
  customerForm: FormGroup;
  coverPhotoFile: File | null = null; // To store the selected cover photo file
  responseMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      location: [''],
      mobile: [''],
      dob: [''],
      age: [''],
      gender: [''],
      profilepicture: [''],
      coverPicture: [''],
      worksat: [''],
      // Add other form controls for the book attributes here
    });
  }

  createCustomer() {
    if (this.customerForm.valid) {
      const bookData = this.customerForm.value;

      console.log('bookData', bookData);

      this.customerService.createCustomer(bookData).subscribe(
        (response) => {
          console.log('responseresponseresponse', response);
          this.responseMessage = response.message;
        },
        (error) => {
          console.error(error);
          this.responseMessage = 'Failed to create the user.';
        }
      );
    } else {
      // Handle form validation errors
      console.error('Form validation failed.');
    }
  }
}
