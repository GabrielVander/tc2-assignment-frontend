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

  customer: Customer;
  isVisible: boolean;
  isRegistering = false;
  customerFormGroup!: FormGroup;
  animalFormGroup!: FormGroup;

  animals = new BehaviorSubject<Animal[]>([]);

  constructor(private customerService: CustomerService, private formBuilder: FormBuilder) {
    customerService.registerCustomerModalIsVisible.subscribe(value => this.isVisible = value);
    customerService.editingCustomer.subscribe(value => {
      this.customer = value;
      if (value) {
        this.customerFormGroup = this.formBuilder.group({
          name: [value.name, [Validators.required]],
          cpf: [value.cpf, [Validators.required]],
        });
        this.animals.next(value._animals);
      }
    });
  }

  handleOk(): void {
    for (const i of Object.keys(this.customerFormGroup.controls)) {
      this.customerFormGroup.controls[i].markAsDirty();
      this.customerFormGroup.controls[i].updateValueAndValidity();
    }
    if (this.customerFormGroup.valid) {
      this.customerService.toggleLoadingTable();

      let customer: Customer = {
        name: this.customerFormGroup.controls.name.value,
        cpf: this.customerFormGroup.controls.cpf.value,
        _animals: this.animals.getValue(),
      };

      if (this.customer) {
        customer = {
          ...customer,
          _id: this.customer._id
        };
        this.customerService.updateCustomer(customer);
      } else {
        this.registerCustomer(customer);
      }
    }
  }

  handleCancel(): void {
    this.customerService.toggleRegisterCustomerModal();
  }

  ngOnInit(): void {
    this.customerFormGroup = this.formBuilder.group({
      name: [this.customer ? this.customer.name : null, [Validators.required]],
      cpf: [this.customer ? this.customer.cpf : null, [Validators.required]],
    });
    this.animalFormGroup = this.formBuilder.group({
      name: [null, [Validators.required]],
      age: [null, [Validators.required]],
      weight: [null, [Validators.required]],
      race: [null, [Validators.required]],
      type: [null, [Validators.required]],
    });
  }

  private registerCustomer(customer: Customer): void {
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
