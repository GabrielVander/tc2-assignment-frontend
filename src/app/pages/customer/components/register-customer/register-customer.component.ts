import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../../services/customer/customer.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html'
})
export class RegisterCustomerComponent implements OnInit {
  isVisible: boolean;
  isRegistering = false;
  validateForm!: FormGroup;

  constructor(private customerService: CustomerService, private formBuilder: FormBuilder) {
    customerService.registerCustomerModalIsVisible.subscribe(value => this.isVisible = value);
  }

  handleOk(): void {
    for (const i of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      this.registerCustomer();
    }
  }

  handleCancel(): void {
    this.customerService.toggleRegisterCustomerModal();
  }

  ngOnInit(): void {
    this.validateForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
    });
  }

  private registerCustomer(): void {
    this.customerService
      .toggleLoadingTable();
    const customer: Customer = {
      name: this.validateForm.controls.name.value,
      cpf: this.validateForm.controls.cpf.value,
    };
    this.customerService.registerCustomer(customer)
      .then(() => {
        this.validateForm.reset();
        this.toggleIsRegistering();
        this.customerService.updateCustomerList();
        this.customerService.toggleRegisterCustomerModal();
      });
  }

  private toggleIsRegistering(): void {
    this.isRegistering = !this.isRegistering;
  }
}
