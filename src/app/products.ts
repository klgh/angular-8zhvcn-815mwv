import { Auth, Products, Tokens } from 'ordercloud-javascript-sdk';
import {
  Configuration,
  ImpersonateTokenRequest,
} from 'ordercloud-javascript-sdk';
import { Me, Orders, LineItems } from 'ordercloud-javascript-sdk';

Configuration.Set({
  baseApiUrl: 'https://sandboxapi.ordercloud.io',
  timeoutInMilliseconds: 20 * 1000,
});

var createToken = function (){
  console.log('createToken');
  return Auth.ClientCredentials('6F6FA276-2D20-4874-9A18-69D601339817')
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
  },
];

export const orderCloudProducts = async () => {};

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/