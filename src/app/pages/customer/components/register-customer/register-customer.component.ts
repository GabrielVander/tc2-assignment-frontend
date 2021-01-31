import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../../services/customer/customer.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import '../../../../models/Animal';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html'
})
export class RegisterCustomerComponent implements OnInit {
  isVisible: boolean;
  isRegistering = false;
  customerFormGroup!: FormGroup;
  animalFormGroup!: FormGroup;

  animals = new BehaviorSubject<Animal[]>([]);

  constructor(private customerService: CustomerService, private formBuilder: FormBuilder) {
    customerService.registerCustomerModalIsVisible.subscribe(value => this.isVisible = value);
  }

  handleOk(): void {
    for (const i of Object.keys(this.customerFormGroup.controls)) {
      this.customerFormGroup.controls[i].markAsDirty();
      this.customerFormGroup.controls[i].updateValueAndValidity();
    }
    if (this.customerFormGroup.valid) {
      this.registerCustomer();
    }
  }

  handleCancel(): void {
    this.customerService.toggleRegisterCustomerModal();
  }

  ngOnInit(): void {
    this.customerFormGroup = this.formBuilder.group({
      name: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
    });
    this.animalFormGroup = this.formBuilder.group({
      name: [null, [Validators.required]],
      age: [null, [Validators.required]],
      weight: [null, [Validators.required]],
      race: [null, [Validators.required]],
      type: [null, [Validators.required]],
    });
  }

  private registerCustomer(): void {
    this.customerService
      .toggleLoadingTable();
    const customer: Customer = {
      name: this.customerFormGroup.controls.name.value,
      cpf: this.customerFormGroup.controls.cpf.value,
      _animals: this.animals.getValue(),
    };
    this.customerService.registerCustomer(customer)
      .then(() => {
        this.customerFormGroup.reset();
        this.toggleIsRegistering();
        this.customerService.updateCustomerList();
        this.customerService.toggleRegisterCustomerModal();
      });
  }

  private toggleIsRegistering(): void {
    this.isRegistering = !this.isRegistering;
  }
}
