interface Order {
  _id?: string;
  _createdAt?: string;
  _costumer?: Customer;
  _animals?: Animal[];
  // @ts-ignore
  _services?: Service[];
  totalPrice: number;
}
