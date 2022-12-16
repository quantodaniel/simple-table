export interface Response {
  total: number;
  skip: number;
  limit: number;
}

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: {
    city: string;
  };
}

export interface CustomerResponse extends Response {
  users: Customer[];
}
